function QueryC(inp_1, inp_2, inp_3)  
{

TBox_1IsTv = inp_1[0]
TBox_1IsInfty = inp_1[1]
TBox_1IsZero = inp_1[2]

TBox_2IsTv = inp_2[0]
TBox_2IsInfty = inp_2[1]
TBox_2IsZero = inp_2[2]

TBox_3IsUB = inp_3[0]
TBox_3IsLB = inp_3[1]

if (TBox_3IsUB)
{
if (TBox_1IsZero && TBox_2IsTv)
{
    SAMPSAMP = "O\\left(\\max\\left(\\frac{\\sqrt{N}}{\\varepsilon^2}, \\frac{N^{2/3}}{\\varepsilon^{4/3}}\\right)\\right)";
    DUALSAMP = 'O\\left(\\frac{\\sqrt{N}}{\\varepsilon^2}\\right)';
    DUALDUAL = '';
    PAIRSAMP = 'O\\left(\\frac{\\sqrt{N}}{\\varepsilon^2}\\right)';
    SUBSAMP = 'O\\left(\\frac{\\sqrt{N}}{\\varepsilon^2}\\right)';
    CONDSAMP = 'O\\left(\\frac{\\sqrt{N}}{\\varepsilon^2}\\right)';
    FULLSAMP = 'O\\left(\\frac{\\sqrt{N}}{\\varepsilon^2}\\right)';
    return;

}

if (TBox_1IsInfty && TBox_2IsTv)
{
    SAMPSAMP = 'samp-samp-INFTY';
    DUALSAMP = 'eval-samp-INFTY';
    DUALDUAL = 'eval-eval-INFTY';
    PAIRSAMP = '';
    SUBSAMP = '';
    CONDSAMP = '';
    FULLSAMP = '';
    return;

}


if (TBox_1IsTv && TBox_2IsTv)
{
    SAMPSAMP = 'samp-samp-zero';
    DUALSAMP = 'eval-samp-INFTY';
    DUALDUAL = 'eval-eval-INFTY';
    PAIRSAMP = '';
    SUBSAMP = '';
    CONDSAMP = '';
    FULLSAMP = '';
    return;

}
}

else if (TBox_3IsLB)
{

}


}
