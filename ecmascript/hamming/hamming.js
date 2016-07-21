class Hamming {
  compute (dnaA, dnaB) {
    if (dnaA.length !== dnaB.length) {
      throw new Error('DNA strands must be of equal length.')
    }
    const dnaLength = dnaB.length
    let hammingDistance = 0
    for (let i = 0; i < dnaLength; i++) {
      if (dnaA[i] !== dnaB[i]) {
        hammingDistance++
      }
    }
    return hammingDistance
  }
}

export default Hamming
