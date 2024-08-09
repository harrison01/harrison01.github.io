let complexity = {
    "ubSAMPSAMP" : 'O\\left(\\frac{N^{2/3}}{\\varepsilon^{8/3}}\\right)',
    "ubDUALSAMP" : 'O\\left(\\max\\left(\\frac{\\sqrt{N}}{\\varepsilon^2}, \\frac{N^{2/3}}{\\varepsilon^{4/3}}\\right)\\right)',
    "ubPAIRSAMP" : 'O\\left(\\max\\left(\\frac{\\sqrt{N}}{\\varepsilon^2}, \\frac{N^{2/3}}{\\varepsilon^{4/3}}\\right)\\right)',
    "ubCONDSAMP" : 'O\\left(\\max\\left(\\frac{\\sqrt{N}}{\\varepsilon^2}, \\frac{N^{2/3}}{\\varepsilon^{4/3}}\\right)\\right)',
    "ubSUBSAMP" : 'O\\left(\\max\\left(\\frac{\\sqrt{N}}{\\varepsilon^2}, \\frac{N^{2/3}}{\\varepsilon^{4/3}}\\right)\\right)',
    "ubFULLSAMP" : 'O\\left(\\frac{\\sqrt{N}}{\\varepsilon^2}\\right)',
    "ubDUALDUAL" : 'O\\left(\\frac{1}{\\varepsilon}\\right)',
    "ubPAIRDUAL" : 'O\\left(\\frac{\\log{N}}{\\varepsilon^2} + \\frac{\\sqrt{N}\\log{N}}{\\varepsilon^4}\\right)',
    "ubCONDDUAL" : 'O\\left(\\frac{\\log{N}}{\\varepsilon^2} + \\frac{\\sqrt{N}\\log{N}}{\\varepsilon^4}\\right)',
    "ubSUBDUAL" : '',
    "ubFULLDUAL" : 'O\\left(\\frac{1}{\\varepsilon}\\right)',
    "ubPAIRPAIR" : 'O\\left(\\frac{\\log^6{N}}{\\varepsilon^{21}}\\right)',
    "ubSUBPAIR" : '',
    "ubCONDPAIR" : 'O\\left(\\frac{\\log^6{N}}{\\varepsilon^{21}}\\right)',
    "ubFULLPAIR" : 'O\\left(\\frac{\\sqrt{\\log{N}}}{\\varepsilon^2}\\right)',
    "ubSUBSUB" : 'O\\left(\\frac{\\log^3{N}}{\\varepsilon^4}\\right)',
    "ubCONDSUB" : '',
    "ubFULLSUB" : 'O\\left(\\frac{\\log^2{N}}{\\varepsilon^4}\\right)',
    "ubCONDCOND" : 'O\\left(\\frac{\\log{\\log{N}}}{\\varepsilon^5}\\right)',
    "ubFULLCOND" : 'O\\left(\\frac{1}{\\varepsilon^2}\\right)',
    "lbSAMPSAMP" : '\\Omega\\left(\\frac{N^{2/3}}{\\varepsilon^{8/3}}\\right)',
    "lbDUALSAMP" : 'O\\left(\\max\\left(\\frac{\\sqrt{N}}{\\varepsilon^2}, \\frac{N^{2/3}}{\\varepsilon^{4/3}}\\right)\\right)',
    "lbPAIRSAMP" : 'O\\left(\\max\\left(\\frac{\\sqrt{N}}{\\varepsilon^2}, \\frac{N^{2/3}}{\\varepsilon^{4/3}}\\right)\\right)',
    "lbCONDSAMP" : 'O\\left(\\max\\left(\\frac{\\sqrt{N}}{\\varepsilon^2}, \\frac{N^{2/3}}{\\varepsilon^{4/3}}\\right)\\right)',
    "lbSUBSAMP" : 'O\\left(\\max\\left(\\frac{\\sqrt{N}}{\\varepsilon^2}, \\frac{N^{2/3}}{\\varepsilon^{4/3}}\\right)\\right)',
    "lbFULLSAMP" : 'O\\left(\\frac{\\sqrt{N}}{\\varepsilon^2}\\right)',
    "lbDUALDUAL" : 'O\\left(\\frac{1}{\\varepsilon}\\right)',
    "lbPAIRDUAL" : 'O\\left(\\frac{\\log{N}}{\\varepsilon^2} + \\frac{\\sqrt{N}\\log{N}}{\\varepsilon^4}\\right)',
    "lbCONDDUAL" : 'O\\left(\\frac{\\log{N}}{\\varepsilon^2} + \\frac{\\sqrt{N}\\log{N}}{\\varepsilon^4}\\right)',
    "lbSUBDUAL" : '',
    "lbFULLDUAL" : 'O\\left(\\frac{1}{\\varepsilon}\\right)',
    "lbPAIRPAIR" : 'O\\left(\\frac{\\log^6{N}}{\\varepsilon^{21}}\\right)',
    "lbSUBPAIR" : '',
    "lbCONDPAIR" : 'O\\left(\\frac{\\log^6{N}}{\\varepsilon^{21}}\\right)',
    "lbFULLPAIR" : 'O\\left(\\frac{\\sqrt{\\log{N}}}{\\varepsilon^2}\\right)',
    "lbSUBSUB" : 'O\\left(\\frac{\\log^3{N}}{\\varepsilon^4}\\right)',
    "lbCONDSUB" : '',
    "lbFULLSUB" : 'O\\left(\\frac{\\log^2{N}}{\\varepsilon^4}\\right)',
    "lbCONDCOND" : 'O\\left(\\frac{\\log{\\log{N}}}{\\varepsilon^5}\\right)',
    "lbFULLCOND" : 'O\\left(\\frac{1}{\\varepsilon^2}\\right)'
}

let complComment = {
    "SAMPSAMP" : 'Theorem  of',
    "DUALSAMP" : 'Follows from up',
    "PAIRSAMP" : 'Follows from what?',
    "CONDSAMP" : 'Follows from up',
    "SUBSAMP" : 'Follows from up',
    "FULLSAMP" : 'Follows from up',
    "DUALDUAL" : 'Follows from up',
    "PAIRDUAL" : 'Follows from up',
    "SUBDUAL" : 'Follows from up',
    "CONDDUAL" : 'Follows from up',
    "FULLDUAL" : 'Follows from up',
    "PAIRPAIR" : 'Follows from up',
    "SUBPAIR" : 'Follows from up',
    "CONDPAIR" : 'Follows from up',
    "FULLPAIR" : 'Follows from up',
    "SUBSUB" : 'Follows from up',
    "CONDSUB" : 'Follows from up',
    "FULLSUB" : 'Follows from Theorem 11 of "Testing Self-Reducible Samplers"',
    "CONDCOND" : 'Follows from up',
    "FULLCOND" : 'Follows from up',
}

// let reference = {
//     "ubSAMPSAMP" : batu2013testing,
//     "ubDUALSAMP" : '',
//     "ubPAIRSAMP" : '',
//     "ubCONDSAMP" : '',
//     "ubSUBSAMP" : '',
//     "ubFULLSAMP" : valiant2017automatic,
// }

// let articles = [
//     {
//         "name" : "Testing Closeness of Discrete Distributions",
//         "arxiv" : "https://arxiv.org/abs/1009.5397",
//         "authors" : [
//             {
//             "name" : "Tugkan Batu",
//             "url" : "http://www.maths.lse.ac.uk/personal/batu/"
//             }
//             {
//                 "name" : "Lance Fortnow",
//                 "url" : "https://lance.fortnow.com/"
//             }
//             {
//                 "name" : "Ronitt Rubinfeld",
//                 "url" : "https://people.csail.mit.edu/ronitt/"
//             }
//             {
//             "name" : "Warren D. Smith",
//             "url" : ""
//             }
//             {
//             "name" : "Patrick White",
//             "url" : ""
//             }

//         ]
//     },
//     {
//         "name" : "arbitrary",

//     }
// ]