import readline from 'readline'
import fs from 'fs'
import { ChildProcess, spawn } from 'child_process'
import { TEXT } from './utils/colors'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let folders: string[] = []
let nodemonProcess: ChildProcess | null = null
let isPromptRunning = false
let selectedFolder: string | null = null

const EXCLUDE_DIRS = ['.git', '.vscode', 'node_modules', 'utils']

// Handle signal SIGINT (Ctrl + C) just in case
process.on('SIGINT', () => {
  rl.close()
  if (nodemonProcess != null) {
    nodemonProcess.kill()
    nodemonProcess.once('exit', () => {
      process.exit(0)
    })
  } else {
    console.log('Exiting...')
    process.exit(0)
  }
})

const folderList = (): string[] => {
  const entries = fs.readdirSync(process.cwd(), { withFileTypes: true })

  return entries
    .filter((dirEntry) =>
      dirEntry.isDirectory() && !EXCLUDE_DIRS.includes(dirEntry.name) // filter out : .git & node_modules
    )
    .map((dirEntry) => dirEntry.name)
}

const promptUser = async () => {
  if (isPromptRunning) {
    return
  }
  isPromptRunning = true

  try {
    folders = folderList()
    let selectedIndex = 0

    const printFolders = () => {
      console.clear()
      console.log('Choose a folder to execute:')

      folders.forEach((folder, index) => {
        if (index === selectedIndex) {
          console.log(`${TEXT.GREEN} ➜ ${folder}${TEXT.CLOSURE}`)
        } else {
          console.log(`   ${folder}`)
        }
      })
    }

    printFolders()

    while (true) {
      const key = await waitKeyPress()

      if (key === '\u001B[A') { // key: Arrow Up
        selectedIndex = selectedIndex === 0 ? folders.length - 1 : selectedIndex - 1
      } else if (key === '\u001B[B') { // key: Arrow Down
        selectedIndex = selectedIndex === folders.length - 1 ? 0 : selectedIndex + 1
      } else if (key === '\r') { // key: Enter
        break
      }
      printFolders()
    }

    selectedFolder = folders[selectedIndex]

    startNodemonProcess()

  } catch (error) {
    console.error('An error occurred:', error)
    rl.close()
  } finally {
    isPromptRunning = false
  }
}

const startNodemonProcess = () => {
  if (selectedFolder == null) {
    throw Error('No folder selected. Exiting...')
  }

  const command = `nodemon --watch ${selectedFolder} --ext ts --exec "ts-node ${selectedFolder}/index.ts"`

  if (nodemonProcess != null) {
    nodemonProcess.kill()
    nodemonProcess.once('close', () => {
      nodemonProcess = spawn(command, {
        shell: true,
        stdio: 'inherit'
      })

      waitForUserCommand()
    })
  } else {
    nodemonProcess = spawn(command, {
      shell: true,
      stdio: 'inherit'
    })

    waitForUserCommand()
  }

  nodemonProcess.on('close', (code, signal) => {
    console.log(`nodemon process closed with code ${code} and signal ${signal}`)
    nodemonProcess = null
    rl.question('Press Enter to restart prompt...', () => {
      restartPrompt()
    })
  })
}

const restartPrompt = () => {
  if (nodemonProcess) {
    nodemonProcess.kill()
    nodemonProcess.once('close', () => {
      console.log('Restarting ...')
      promptUser()
    })
  } else {
    console.log('Restarting ...')
    promptUser()
  }
}

const waitKeyPress = (): Promise<string> => {
  return new Promise((resolve) => {
    process.stdin.once('data', (key) => {
      resolve(key.toString())
    })
  })
}

// Handle restart
const waitForUserCommand = async () => {
  while (true) {
    const key = await waitCommand()
    if (key.toLowerCase().trim() === 'rs') {
      restartPrompt()
      break
    }
  }
}

const waitCommand = (): Promise<string> => {
  return new Promise((resolve) => {
    rl.question('', (answer) => {
      resolve(answer)
    })
  })
}

promptUser()

