var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var path = require('path')
var port = process.env.PORT || 3000;
var fs = require("fs");




app.use(express.static(__dirname + '/../templateGenerator'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.post('*', function(req, res){

	var officegen = require('officegen');
	var docx = officegen ( 'docx' );
	var content = req.body.data;


	docx.on ( 'finalize', function ( written ) {
				console.log ( 'Finish to create Word file.\nTotal bytes created: ' + written + '\n' );
			});

	docx.on ( 'error', function ( err ) {
				console.log ( err );
			});

	var pObj = docx.createP ();
	pObj.addText (content.name, { font_face: 'Helvetica Neue' });
	pObj.addLineBreak ();
	pObj.addText (content.city, { font_face: 'Helvetica Neue' });
	pObj.addLineBreak ();
	pObj.addText (content.phoneNumber, { font_face: 'Helvetica Neue' });
	pObj.addLineBreak ();
	pObj.addText (content.email, { font_face: 'Helvetica Neue' });
	pObj.addLineBreak ();
	pObj.addLineBreak ();
	pObj.options.align = 'right';
	var pObj = docx.createP ();
	pObj.addText (content.date, { font_face: 'Helvetica Neue' });
	pObj.addLineBreak ();
	pObj.addLineBreak ();
	if(content.fullName){
		pObj.addText(content.fullName, { font_face: 'Helvetica Neue'});
		pObj.addLineBreak ();
		pObj.addText(content.title, { font_face: 'Helvetica Neue'});
		pObj.addLineBreak ();
		pObj.addText(req.body.companyName, { font_face: 'Helvetica Neue'});
		pObj.addLineBreak ();
		pObj.addText(content.address, { font_face: 'Helvetica Neue'});
		pObj.addLineBreak ();
		pObj.addText(content.cityState, { font_face: 'Helvetica Neue'});
		pObj.addLineBreak ();
		pObj.addLineBreak();
	}
	pObj.addText (content.intro, { font_face: 'Helvetica Neue' });
	pObj.addLineBreak ();
	pObj.addLineBreak ();
	pObj.addText (content.paragraphOne, { font_face: 'Helvetica Neue' });
	pObj.addLineBreak ();
	pObj.addLineBreak ();
	pObj.addText (content.paragraphTwo, { font_face: 'Helvetica Neue' });
	pObj.addLineBreak ();
	pObj.addLineBreak ();
	pObj.addText (content.paragraphThree, { font_face: 'Helvetica Neue' });
	pObj.addLineBreak ();
	pObj.addLineBreak ();
	pObj.addText (content.regards, { font_face: 'Helvetica Neue' });
	pObj.addLineBreak ();
	pObj.addLineBreak ();
	pObj.addText (content.name, { font_face: 'Helvetica Neue' });

	var companyName = req.body.companyName.split(' ').join('');
	var stack = req.body.stack.split(' ')[0].toUpperCase();
	var out = fs.createWriteStream (path.join(__dirname + '/../../../coverLetters/' + companyName + stack + '.docx'));
	out.on('error',function(err){
		console.log(err);
	});
	docx.generate(out);
	res.sendStatus(200)
});
app.get('*', function(req,res){
  res.sendFile(path.join(__dirname + '/../templateGenerator/cover.html'));

});app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});