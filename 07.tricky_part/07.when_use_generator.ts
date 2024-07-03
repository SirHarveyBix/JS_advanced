import { logger } from "."

logger(__filename, `   When Are Generators Useful?`)

const allImages = Array.from(
  { length: 10 },
  (_, i) => `https://placeimg.com/640/480/lol?image=${i}`
)

function* getBatchOfImages(images: string[], batchSize = 10) {
  let currentIndex = 0

  while (currentIndex < images.length) {
    yield images.slice(currentIndex, currentIndex + batchSize)
    currentIndex += batchSize
  }
}

const imageGenerator = getBatchOfImages(allImages)
console.log(imageGenerator.next().value)

