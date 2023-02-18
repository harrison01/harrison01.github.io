function QueryC(inp_1, inp_2, inp_3)  
{

TBox_1IsTv = inp_1[0]
TBox_1IsInfty = inp_1[1]
TBox_1IsZero = inp_1[2]

TBox_2IsTv = inp_2[0]
TBox_2IsInfty = inp_2[1]
TBox_2IsZero = inp_2[2]

if (TBox_1IsTv && TBox_2IsTv)
{
    SAMPSAMP = "\\mathcal{O}\\left(\\max\\left(\\frac{\\sqrt{n}}{\\varepsilon^2}, \\frac{n^{2/3}}{\\varepsilon^{4/3}}\\right)\\right)";
    EVALSAMP = 'eval-samp-tv';
    EVALEVAL = 'eval-eval-tv';
    PRSAMP = 'pr-samp-tv';
    return;

}

if (TBox_1IsTv && TBox_2IsInfty)
{
    SAMPSAMP = 'samp-samp-INFTY';
    EVALSAMP = 'eval-samp-INFTY';
    EVALEVAL = 'eval-eval-INFTY';
    PRSAMP = 'pr-samp-INFTY';
    return;

}


if (TBox_1IsTv && TBox_2IsZero)
{
    SAMPSAMP = 'samp-samp-zero';
    EVALSAMP = 'eval-samp-zero';
    EVALEVAL = 'eval-eval-zero';
    PRSAMP = 'pr-samp-zero';
    return;

}



}
