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


Tv_1 = "Tv_1";         // TBox options
Tv_2 = "Tv_2";
Infty_1 = "Infty_1";
Infty_2 = "Infty_2";
Zero_1 = "Zero_1";
Zero_2 = "Zero_2";

InterTB = "InternalizedTBox";

TBoxOption=Tv_1;

TBoxIsTv_1=false;
TBoxIsTv_2=false;
TBoxIsInfty_1=false;
TBoxIsInfty_2=false;
TBoxIsZero_1=false;
TBoxIsZero_2=false;

// MuOper=false;               // Miscellaneous
// RVMaps=false;
// FAgree=false;

//----------------------------
function ReadInput() // Read the form into the boolean variables
{
 with(document.LogicForm)
 {

  TBoxOption_1 = checkedvalue(TBoxOpt_1);
  TBoxOption_2 = checkedvalue(TBoxOpt_2);
   
  TBox_1IsTv = (TBoxOption_1==Tv_1);
  TBox_1IsInfty = (TBoxOption_1==Infty_1);
  TBox_1IsZero = (TBoxOption_1==Zero_1);

  TBox_2IsTv = (TBoxOption_2==Tv_2);
  TBox_2IsInfty = (TBoxOption_2==Infty_2);
  TBox_2IsZero = (TBoxOption_2==Zero_2);

  return [[TBox_1IsTv, TBox_1IsInfty, TBox_1IsZero],[TBox_2IsTv, TBox_2IsInfty, TBox_2IsZero]]
 }
}

// var        // Create integer variables (Logic Determinators)
