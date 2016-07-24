class Transcriptor {
  toRna(dnaStrand) {
    const rnaComplement = {
      'G': 'C',
      'C': 'G',
      'T': 'A',
      'A': 'U'
    }
    return [...dnaStrand]
      .map((dna) => rnaComplement[dna])
      .join('')
  }
}

export default Transcriptor;

