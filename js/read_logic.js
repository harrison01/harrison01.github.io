function checkedindex(radiobaton)
{ for(var i=0; i<radiobaton.length; i++)
  { if(radiobaton[i].checked) return i; }
}

function checkedvalue(radiobaton)
{ return radiobaton[checkedindex(radiobaton)].value;
}

var Dunno='<span style=\"font-family:Times New Roman;font-size:16pt\" '+
          'title=\"I do not know... If you know, send me a mail! (see below)\">&#9786;</span>';
var sAND='<span class=little>&and;</span>';
var SPACE = '&nbsp;';

// ########################################################

TvTB = "TvTv";         // TBox options
InftyTB = "TvInfty";
ZeroTB = "TvZero";
InterTB = "InternalizedTBox";

TBoxOption=TvTB;

TBoxIsTv=false;
TBoxIsInfty=false;
TBoxIsZero=false;

// MuOper=false;               // Miscellaneous
// RVMaps=false;
// FAgree=false;

//----------------------------
function ReadInput() // Read the form into the boolean variables
{
 with(document.LogicForm)
 {

  TBoxOption = checkedvalue(TBoxOpt);

  TBoxIsTv = (TBoxOption==TvTB);
  TBoxIsInfty = (TBoxOption==InftyTB);
  TBoxIsZero = (TBoxOption==ZeroTB);

return TBoxIsTv
 }
}

// var        // Create integer variables (Logic Determinators)
