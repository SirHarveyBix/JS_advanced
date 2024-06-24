import { TEXT } from '../utils/colors';
import { logger } from './index';

logger(__filename, '   Bind with Timers');



class Counter {
  public count = 0
  public incrementAmount = 1

  private counted = 0

  constructor(startingNum: number, incrementAmount: number) {
    this.count = startingNum
    this.incrementAmount = incrementAmount
  }

  /** - - - -   */
  start() {
    const intervalId = setInterval(
      function () {
        console.log(`  ${TEXT.YELLOW}${TEXT.BOLD}This is ${TEXT.CLOSURE}`, this);
        console.log('count', this.count)

        this.count += this.incrementAmount
        this.counted += 1

        if (this.counted >= 5 || isNaN(this.counted)) {
          setTimeout(function () {
            clearInterval(intervalId)
            this.counted = 0

            console.log(' [Security]: For safety Interval has been stopped\n')
            console.log("'This', here is 'Timeout', so 'count' does not exists !\n")
          })
        }
      }, 1000)
  }

  /** - - - -   */
  boundStart() {
    const intervalId = setInterval(
      function () {
        console.log(`  ${TEXT.YELLOW}${TEXT.BOLD}This is ${TEXT.CLOSURE}`, this);
        console.log('count', this.count)

        this.count += this.incrementAmount
        this.counted += 1

        if (this.counted >= 5 || isNaN(this.counted)) {
          setTimeout(function () {
            clearInterval(intervalId)
            this.counted = 0

            console.log(' [Security]: For safety Interval has been stopped')
            console.log(`    ${TEXT.RED}➜ ${TEXT.BOLD}${TEXT.PURPLE}Do not forget !${TEXT.CLOSURE}\n'This' is the context if you executes the function : 'start()', on a browser, the value of 'This' won't be the same !`)
            console.log(`\n➜ setInterval({ ... }}${TEXT.GREEN}${TEXT.BOLD}.bind(this)${TEXT.CLOSURE}, helps to keep the context`)
          })
        }
      }.bind(this), 1000)
  }
}

const counter = new Counter(1, 1)

counter.start()


counter.boundStart()
