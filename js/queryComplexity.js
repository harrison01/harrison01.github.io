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


// // server :
// fetch("./data.json").then(res =>res.json())
// .then(data=>{
//     console.log(data)
// })


if (TBox_3IsUB)
{
if (TBox_1IsZero && TBox_2IsTv)
{
    SAMPSAMP = complexity["ubSAMPSAMP"];
    SAMPSAMPRef = "See [" + batu2013testing + "]";
    DUALSAMP = complexity["ubDUALSAMP"];
    DUALSAMPRef = "Follows from above";
    PAIRSAMP = complexity["ubPAIRSAMP"];
    PAIRSAMPRef = "Follows from above";;
    SUBSAMP = complexity["ubSUBSAMP"];
    SUBSAMPRef = "Follows from above";;
    CONDSAMP = complexity["ubCONDSAMP"];
    CONDSAMPRef = "Follows from above";;
    FULLSAMP = complexity["ubFULLSAMP"];
    FULLSAMPref = "see [" + valiant2017automatic + "]";

    DUALDUAL = complexity["ubDUALDUAL"];
    DUALDUALRef = "See [" + "]";
    PAIRDUAL = complexity["ubPAIRDUAL"];
    PAIRDUALRef = "See [" + potescalable + "]";
    SUBDUAL = complexity["ubSUBDUAL"];
    SUBDUALRef = " ";
    CONDDUAL = complexity["ubCONDDUAL"];
    CONDDUALRef = "Follows from above";
    FULLDUAL = complexity["ubFULLDUAL"];
    FULLDUALRef = " ";

    PAIRPAIR = complexity["ubPAIRPAIR"];
    PAIRPAIRRef = "See [" + canonne2015testing + "]";
    SUBPAIR = complexity["ubSUBPAIR"];
    SUBPAIRRef = " ";
    CONDPAIR = complexity["ubCONDPAIR"];
    CONDPAIRRef = "Follows from Above";
    FULLPAIR = complexity["ubFULLPAIR"];
    FULLPAIRRef = "See [" + nar2020cond + "]";

    SUBSUB = complexity["ubSUBSUB"];
    SUBSUBRef = "See [" + bc18 + "]";
    CONDSUB = complexity["ubCONDSUB"];
    CONDSUBRef = " "
    FULLSUB = complexity["ubFULLSUB"];
    FULLSUBRef = "See [" + bc18 + "]";
    CONDCOND = complexity["ubCONDCOND"];
    CONDCONDRef = "See [" + falahatgar2015faster + "]";
    FULLCOND = complexity["ubFULLCOND"];
    FULLCONDRef = "See [" + falahatgar2015faster + "]";
    return;

}

if (TBox_1IsInfty && TBox_2IsTv)
{
    SAMPSAMP = 'samp-samp-INFTY';
    SAMPSAMPRef = "See something";
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
    if (TBox_1IsZero && TBox_2IsTv)
    {
        SAMPSAMP = complexity["ubSAMPSAMP"];
        SAMPSAMPRef = "See [" + batu2013testing + "]";
        DUALSAMP = complexity["ubDUALSAMP"];
        DUALSAMPRef = "Follows from above";
        PAIRSAMP = complexity["ubPAIRSAMP"];
        PAIRSAMPRef = "Follows from above";;
        SUBSAMP = complexity["ubSUBSAMP"];
        SUBSAMPRef = "Follows from above";;
        CONDSAMP = complexity["ubCONDSAMP"];
        CONDSAMPRef = "Follows from above";;
        FULLSAMP = complexity["ubFULLSAMP"];
        FULLSAMPref = "see [" + valiant2017automatic + "]";
    
        DUALDUAL = '';
        DUALDUALRef = '';
        PAIRSAMP = 'O\\left(\\frac{\\sqrt{N}}{\\varepsilon^2}\\right)';
        SUBSAMP = 'O\\left(\\frac{\\sqrt{N}}{\\varepsilon^2}\\right)';
        CONDSAMP = 'O\\left(\\frac{\\sqrt{N}}{\\varepsilon^2}\\right)';
        FULLSAMP = 'O\\left(\\frac{\\sqrt{N}}{\\varepsilon^2}\\right)';
    
        return;
    
    }
    
    if (TBox_1IsInfty && TBox_2IsTv)
    {
        SAMPSAMP = 'samp-samp-INFTY';
        SAMPSAMPRef = "See something";
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


}
