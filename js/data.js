let complexity = {
    "ubSAMPSAMP" : 'O\\left(\\max\\left(\\frac{\\sqrt{N}}{\\varepsilon^2}, \\frac{N^{2/3}}{\\varepsilon^{4/3}}\\right)\\right)',
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
    "ubFULLCOND" : 'O\\left(\\frac{1}{\\varepsilon^2}\\right)'
}

let complComment = {
    "ubSAMPSAMP" : 'Theorem * of',
    "ubDUALSAMP" : 'Follows from up',
    "ubPAIRSAMP" : 'Follows from what?',
    "ubCONDSAMP" : 'Follows from up',
    "ubSUBSAMP" : 'Follows from up',
    "ubFULLSAMP" : 'Follows from up',
    "ubDUALDUAL" : 'Follows from up',
    "ubPAIRDUAL" : 'Follows from up',
    "ubSUBDUAL" : 'Follows from up',
    "ubCONDDUAL" : 'Follows from up',
    "ubFULLDUAL" : 'Follows from up',
    "ubPAIRPAIR" : 'Follows from up',
    "ubSUBPAIR" : 'Follows from up',
    "ubCONDPAIR" : 'Follows from up',
    "ubFULLPAIR" : 'Follows from up',
    "ubSUBSUB" : 'Follows from up',
    "ubCONDSUB" : 'Follows from up',
    "ubFULLSUB" : 'Follows from Theorem 11 of "Testing Self-Reducible Samplers"',
    "ubCONDCOND" : 'Follows from up',
    "ubFULLCOND" : 'Follows from up'    
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