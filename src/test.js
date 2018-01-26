import chai from 'chai'
import { chooseRandom } from './lib'

chai.should()

describe('chooseRandom', () => {
  it('Should return an array', () => {
    chooseRandom([1, 2, 3], 2).should.be.an('array')
  })
  it('Should not mutate the array passed in', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    chooseRandom(arr, 5)
    arr.should.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
  it('Should return a random array', () => {
    const arr = Array(100).fill().map((elem, index) => index + 1)
    const rand = chooseRandom(arr, 5)
    rand.should.not.deep.equal(arr)
  })
  it('Should return an array of the passed in length', () => {
    chooseRandom([1, 2, 3, 4, 5], 3).should.have.lengthOf(3)
    chooseRandom(Array(100).fill().map((elem, index) => index + 1), 15).should.have.lengthOf(15)
  })
})