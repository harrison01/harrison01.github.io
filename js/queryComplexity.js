function QueryC() // Do we know anything about Concept SAT problem in this Logic?
{

if (TBoxIsTv)
{
    SAMPSAMP = "\\mathcal{O}\\left(\\max\\left(\\frac{\\sqrt{n}}{\\varepsilon^2}, \\frac{n^{2/3}}{\\varepsilon^{4/3}}\\right)\\right)";
    EVALSAMP = 'eval-samp-tv';
    EVALEVAL = 'eval-eval-tv';
    PRSAMP = 'pr-samp-tv';
    return;

}

if (TBoxIsInfty)
{
    SAMPSAMP = 'samp-samp-INFTY';
    EVALSAMP = 'eval-samp-INFTY';
    EVALEVAL = 'eval-eval-INFTY';
    PRSAMP = 'pr-samp-INFTY';
    return;

}


if (TBoxIsZero)
{
    SAMPSAMP = 'samp-samp-zero';
    EVALSAMP = 'eval-samp-zero';
    EVALEVAL = 'eval-eval-zero';
    PRSAMP = 'pr-samp-zero';
    return;

}



}
