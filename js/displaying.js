var  // Output strings

SAMPSAMP = '';
// EVALSAMP = '';
// EVALEVAL = '';
// PRSAMP = '';
// PREVAL = '';
// PRPR = '';
DUALSAMP = '';
// DUALEVAL = '';
// DUALPR = '';
DUALDUAL = '';
PAIRSAMP = '';
// PAIREVAL = '';
// PAIRPR = '';
PAIRDUAL = '';
PAIRPAIR = '';
SUBSAMP = '';
// SUBEVAL = '';
// SUBPR = '';
SUBDUAL = '';
SUBPAIR = '';
SUBSUB = '';
CONDSAMP = '';
// CONDEVAL = '';
// CONDPR = '';
CONDDUAL = '';
CONDPAIR = '';
CONDSUB = '';
CONDCOND = '';
FULLSAMP = '';
// FULLEVAL = '';
// FULLPR = '';
FULLDUAL = '';
FULLPAIR = '';
FULLSUB = '';
FULLCOND = '';
FULLFULL = '';

SAMPSAMPRef = '';
DUALSAMPRef = '';
FULLSAMPref = '';
PAIRSAMPRef = '';
SUBSAMPRef = '';
CONDSAMPRef = '';

var comvar = '';


// ===============================================================================================

function ShowID(ID,iHTML)
{
 document.getElementById(ID).innerHTML=katex.renderToString(iHTML);
}


function showComment(comment){
   document.getElementById('resultcomment').innerHTML= comment;
}
function displayComments(){
   with(document.commentForm){
      comvar = checkedvalue(combaton);
   }
   if(comvar == 'sampSamp'){
      showComment(complComment["SAMPSAMP"]);
   }
   else if (comvar == 'dualSamp'){
      showComment(complComment["DUALSAMP"]);
   }
   else if (comvar == 'dualDual'){
      showComment(complComment["DUALDUAL"]);
   }
   else if (comvar == 'pairSamp'){
      showComment(complComment["PAIRSAMP"]);
   }
   else if (comvar == 'pairDual'){
      showComment(complComment["PAIRDUAL"]);
   }
   else if (comvar == 'pairPair'){
      showComment(complComment["PAIRPAIR"]);
   }
   else if (comvar == 'subSamp'){
      showComment(complComment["SUBSAMP"]);
   }
   else if (comvar == 'subDual'){
      showComment(complComment["SUBDUAL"]);
   }
   else if (comvar == 'subPair'){
      showComment(complComment["SUBPAIR"]);
   }
   else if (comvar == 'subSub'){
      showComment(complComment["SUBSUB"]);
   }
   else if (comvar == 'condSamp'){
      showComment(complComment["CONDSAMP"]);
   }
   else if (comvar == 'condDual'){
      showComment(complComment["CONDDUAL"]);
   }
   else if (comvar == 'condPair'){
      showComment(complComment["CONDPAIR"]);
   }
   else if (comvar == 'condSub'){
      showComment(complComment["CONDSUB"]);
   }
   else if (comvar == 'condCond'){
      showComment(complComment["CONDCOND"]);
   }
   else if (comvar == 'fullSamp'){
      showComment(complComment["FULLSAMP"]);
   }
   else if (comvar == 'fullDual'){
      showComment(complComment["FULLDUAL"]);
   }
   else if (comvar == 'fullPair'){
      showComment(complComment["FULLPAIR"]);
   }
   else if (comvar == 'fullSub'){
      showComment(complComment["FULLSUB"]);
   }
   else if (comvar == 'fullCond'){
      showComment(complComment["FULLCOND"]);
   }
}


function DisplayResults()
{

 ShowID('sampSamp',SAMPSAMP, SAMPSAMPRef);
//  ShowID('evalSamp',EVALSAMP);
//  ShowID('evalEval',EVALEVAL);
//  ShowID('prSamp',PRSAMP);
//  ShowID('prEVAL',PREVAL);
//  ShowID('prPr',PRPR);
 ShowID('dualSamp',DUALSAMP, DUALSAMPRef);
//  ShowID('dualEval',DUALEVAL);
//  ShowID('dualPr',DUALPR);
 ShowID('dualDual',DUALDUAL, DUALDUALRef);
 ShowID('pairSamp',PAIRSAMP,  PAIRSAMPRef);
//  ShowID('pairEval',PAIREVAL);
//  ShowID('pairPr',PAIRPR);
 ShowID('pairDual',PAIRDUAL, PAIRDUALRef);
 ShowID('pairPair',PAIRPAIR, PAIRPAIRRef);
 ShowID('subSamp',SUBSAMP, SUBSAMPRef);
//  ShowID('subEval',SUBEVAL);
//  ShowID('subrPr',SUBPR);
 ShowID('subDual',SUBDUAL, SUBDUALRef);
 ShowID('subPair',SUBPAIR, SUBPAIRRef);
 ShowID('subSub',SUBSUB, SUBSUBRef);
 ShowID('condSamp',CONDSAMP, CONDSAMPRef);
//  ShowID('condEval',CONDEVAL);
//  ShowID('condPr',CONDPR);
 ShowID('condDual',CONDDUAL, CONDDUALRef);
 ShowID('condPair',CONDPAIR, CONDPAIRRef);
 ShowID('condSub',CONDSUB, CONDSUBRef);
 ShowID('condCond',CONDCOND, CONDCONDRef);
 ShowID('fullSamp',FULLSAMP, FULLSAMPref);
//  ShowID('fullEval',FULLEVAL);
//  ShowID('fullPr',FULLPR);
 ShowID('fullDual',FULLDUAL, FULLDUALRef);
 ShowID('fullPair',FULLPAIR, FULLPAIRRef);
 ShowID('fullSub',FULLSUB, FULLSUBRef);
 ShowID('fullCond',FULLCOND, FULLCONDRef);
//  ShowID('fullFull',FULLFULL, 'todo');


}


// ===============================================================================================

function ShowComplexity(inp_1, inp_2, inp_3)
{
 QueryC(inp_1, inp_2, inp_3);
 DisplayResults();
}


function ShowAll()
{
 inp = ReadInput();
//  console.log(inp);
 ShowComplexity(inp[0], inp[1], inp[2]);

 displayComments();
 
//  const requestURL = './data.json';
//   const request = new Request(requestURL);

//   const response = fetch(request);
//   const superHeroesText = response.text();
  

//   const superHeroes = JSON.parse(superHeroesText);
//   console.log(superHeroes.squadName);
//   populateHeroes(superHeroes);
}


function ShowBeta()
{
var WW=window.open('','WWname','width=200,height=200,resizable=yes');
//WW.window.document.title='What is beta?';
WW.window.document.write(
'<html><head><title>What is beta?</title></head><body>'+
'<div style="font-size:11pt;font-style:italic;text-align:right;">'+
'The term "beta" is<br>an abbreviation for the phrase<br>"beta than nothing",'+
'<br>which is exactly what<br>beta software is.<br><br>'+
'Guy Kawasaki<br><a target="_blank" href="http://scribd.com/doc/68449509/The-Macintosh-Way-Guy-Kawasaki">"The Macintosh Way"</a></div></body></html>');

}

// ==================================================================================

 var NamingScheme = '_Anchor';
     EmptyString='';
     OMOString = 'Go to the reference [';
     OMOEnd=']...';

function GoToRef(VN)
{
// window.location.hash=VN;

   var currentURL = window.location.href;
       wherehash  = currentURL.lastIndexOf('#');
       newURL     = ( (wherehash>0)? currentURL.substring(0,wherehash) : currentURL ) +'#'+VN;
//   window.location.replace(newURL);
   window.location.href=newURL;

}

function CreateRefLink(VarName) // Creates a variable with this name and puts into it the tag <a href="#..."></a>
{                               // Additionally, writes into HTML file the anchor: <a name="..."></a>
                                // This "..." will be VarName_Anchor
                                // Side effect: increments RefLabel !

 NamingScheme = VarName+'_Anchor';

 // Old: eval(VarName+'=(++RefLabel)');

// Simple:  eval(VarName+'= \'<a href=#'+NamingScheme+'>'+(++RefLabel)+'</a>\';');

 RefLabel++;

 eval(VarName+'= \'<a target="_self" style="color:blue" href="javascript:void(0);" '+
 'onMouseOver="window.status=OMOString+'+RefLabel+'+OMOEnd;return true;" '+
 'onMouseOut="window.status=EmptyString;" '+
 'onClick=GoToRef(\"'+NamingScheme+'\");>'+RefLabel+'</a>\';');

 document.writeln('<a name="'+NamingScheme+'"></a>');

}

// -----------------------------------------------

function SwapValues(CurrentValue,Value1,Value2)
{
  return (  (CurrentValue==Value1)? Value2 : Value1 );
}

/* -----------------------------------------------
   This function searches for all tags <TagName class="ClassName"></TagName>
   and makes them all visible or invisible simultaneously.
   We could simply use document.getElementsByClassName("ClassName"), but
   this method is not realized in Internet Explorer, alas!
   DisplayStyle = 'inline' / 'block' / ...
*/

function ToggleElementsByClassName(TagName,ClassName,DisplayStyle)
{ var spans=document.getElementsByTagName(TagName);

  for(var i=0;i<spans.length;i++)
	if(spans[i].className.indexOf(ClassName)>=0)
	{  var before = spans[i].style.display || 'none';
		spans[i].style.display= SwapValues(before,'none',DisplayStyle);
	}
}

var ShowAbstr = 'Abstract';
var HideAbstr = 'Hide Abstract';

var ShowBib = 'BibTeX';
var HideBib = 'Hide BibTeX';

/* -------------------------------------------------
   This function shows/hides the <DIV> block with abstract
   and changes the link text: "Show Abstract" / "Hide Abstract"
*/ 
function FlipAbstract(refID,anchorObj,DivSuffix,Text1,Text2,FlipAnchorText)
{
 var before=document.getElementById(refID+'_'+DivSuffix).style.display || 'none';

     // Initially, it is ''; after two flips it is 'none'.
     // So we reduced its value to 'none' in both cases.

 document.getElementById(refID+'_'+DivSuffix).style.display=
 SwapValues(before,'none','block');

   // Decided to not flip the text, since "Show All Abstracts" button
   // will not flip all these texts (I'm lazy to program it)

if(FlipAnchorText) anchorObj.innerHTML = SwapValues(anchorObj.innerHTML,Text1,Text2);

}

// -------------------------------------------------

function CreateAbstractLink(refID)
{
 document.writeln('<a target="_self" href="javascript:void(0);" '+
 'onclick="FlipAbstract(\''+refID+'\',this,\'abstract\',ShowAbstr,HideAbstr,1);">'+ShowAbstr+'</a>');
}

function CreateBibTeXLink(refID)
{
 document.writeln('<a target="_self" href="javascript:void(0);" '+
 'onclick="FlipAbstract(\''+refID+'\',this,\'bibtex\',ShowBib,HideBib,true);">'+ShowBib+'</a>');
}

function CreateAbstractBibTeXLinks(refID)
{
//  CreateAbstractLink(refID);
//  document.writeln(' | ');
 CreateBibTeXLink(refID);
}













function FinishContent()
{
 var LM=new Date(document.lastModified);

       yy = LM.getYear();
       mm = LM.getMonth(); // JAN=0; FEB=1; ...
       dd = LM.getDate();

       hour  = LM.getHours();
       mins = LM.getMinutes();
       secs = LM.getSeconds();

       DD = ((dd<10)? "0" : "")+dd;
       MM = ((mm<9)? "0" : "")+ (mm+1);
       YYYY = (  (yy<2000)? (1900+yy) : (yy)  );
       // Under some browsers yy=2005, not usual 105 !! 
       Hour = ((hour<10)? "0" : "") + hour;
       Mins = ((mins<10)? "0" : "") + mins;
       Secs = ((secs<10)? "0" : "") + secs;

       DateString = DD + "/" + MM + "/" + YYYY;
       TimeString= Hour + ":" + Mins; // + ":" + Secs;

 document.writeln('<div>Last update: '+
 DateString + "&nbsp;" + TimeString +'</div>');

}


function NoSpamMail(s)
{
var MailString='Current Maintainers: '+'uddaloksarkar'+sobaka+'gmail.com?subject=Distribution%20Testing%20Navigator';
 location.href=MailString;
}
