fs = require('fs');


function BEGINMETAFILE(length, fd) {
    console.log('BEGINMETAFILE');
    /* var buffer = new Buffer.alloc(length);
     fs.readSync(fd, buffer, 0, length, null);
     console.log(buffer.toString('ascii'));*/
}
function ENDMETAFILE(length, fd) { console.log('ENDMETAFILE'); }
function BEGINPICTURE(length, fd) { console.log('BEGINPICTURE'); }
function BEGINPICTUREBODY(length, fd) { console.log('BEGINPICTUREBODY'); }
function ENDPICTURE(length, fd) { console.log('ENDPICTURE'); }
function METAFILEVERSION(length, fd) { console.log('METAFILEVERSION'); }
function METAFILEDESCRIPTION(length, fd) { console.log('METAFILEDESCRIPTION'); }
function VDCTYPE(length, fd) { console.log('VDCTYPE'); }
function INTEGERPRECISION(length, fd) { console.log('INTEGERPRECISION'); }
function REALPRECISION(length, fd) { console.log('REALPRECISION'); }
function INDEXPRECISION(length, fd) { console.log('INDEXPRECISION'); }
function COLOURPRECISION(length, fd) { console.log('COLOURPRECISION'); }
function COLOURINDEXPRECISION(length, fd) { console.log('COLOURINDEXPRECISION'); }
function MAXIMUMCOLOURINDEX(length, fd) { console.log('MAXIMUMCOLOURINDEX'); }
function COLOURVALUEXTENT(length, fd) { console.log('COLOURVALUEXTENT'); }
function METAFILEELEMENTLIST(length, fd) { console.log('METAFILEELEMENTLIST'); }
function METAFILEDEFAULTSREPLACEMENT(length, fd) { console.log('METAFILEDEFAULTSREPLACEMENT'); }
function FONTLIST(length, fd) { console.log('FONTLIST'); }
function CHARACTERSETLIST(length, fd) { console.log('CHARACTERSETLIST'); }
function CHARACTERCODINGANNOUNCER(length, fd) { console.log('CHARACTERCODINGANNOUNCER'); }
function SCALINGMODE(length, fd) { console.log('SCALINGMODE'); }
function COLOURSELECTIONMODE(length, fd) { console.log('COLOURSELECTIONMODE'); }
function LINEWIDTHSPECIFICATIONMODE(length, fd) { console.log('LINEWIDTHSPECIFICATIONMODE'); }
function MARKERSIZESPECIFICATIONMODE(length, fd) { console.log('MARKERSIZESPECIFICATIONMODE'); }
function EDGEWIDTHSPECIFICATIONMODE(length, fd) { console.log('EDGEWIDTHSPECIFICATIONMODE'); }
function VDCEXTENT(length, fd) { console.log('VDCEXTENT'); }
function BACKGROUNDCOLOUR(length, fd) { console.log('BACKGROUNDCOLOUR'); }
function VDCINTEGERPRECISION(length, fd) { console.log('VDCINTEGERPRECISION'); }
function VDCREALPRECISION(length, fd) { console.log('VDCREALPRECISION'); }
function AUXILIARYCOLOUR(length, fd) { console.log('AUXILIARYCOLOUR'); }
function TRANSPARENCY(length, fd) { console.log('TRANSPARENCY'); }
function CLIPRECTANGLE(length, fd) { console.log('CLIPRECTANGLE'); }
function CLIPINDICATOR(length, fd) { console.log('CLIPINDICATOR'); }
function POLYLINE(length, fd) { console.log('POLYLINE'); }
function DISJOINTPOLYLINE(length, fd) { console.log('DISJOINTPOLYLINE'); }
function POLYMARKER(length, fd) { console.log('POLYMARKER'); }
function TEXT(length, fd) { console.log('TEXT'); }
function RESTRICTEDTEXT(length, fd) { console.log('RESTRICTEDTEXT'); }
function APPENDTEXT(length, fd) { console.log('APPENDTEXT'); }
function POLYGON(length, fd) { console.log('POLYGON'); }
function POLYGONSET(length, fd) { console.log('POLYGONSET'); }
function CELLARRAY(length, fd) { console.log('CELLARRAY'); }
function GENERALIZEDDRAWINGPRIMITIVE(length, fd) { console.log('GENERALIZEDDRAWINGPRIMITIVE'); }
function RECTANGLE(length, fd) { console.log('RECTANGLE'); }
function CIRCLE(length, fd) { console.log('CIRCLE'); }
function CIRCULARARCPOINT(length, fd) { console.log('CIRCULARARCPOINT'); }
function CIRCULARARCPOINTCLOSE(length, fd) { console.log('CIRCULARARCPOINTCLOSE'); }
function CIRCULARARCCENTRE(length, fd) { console.log('CIRCULARARCCENTRE'); }
function CIRCULARARCCENTRECLOSE(length, fd) { console.log('CIRCULARARCCENTRECLOSE'); }
function ELLIPSE(length, fd) { console.log('ELLIPSE'); }
function ELLIPTICALARC(length, fd) { console.log('ELLIPTICALARC'); }
function ELLIPTICALARCCLOSE(length, fd) { console.log('ELLIPTICALARCCLOSE'); }
function LINEBUNDLEINDEX(length, fd) { console.log('LINEBUNDLEINDEX'); }
function LINETYPE(length, fd) { console.log('LINETYPE'); }
function LINEWIDTH(length, fd) { console.log('LINEWIDTH'); }
function LINECOLOUR(length, fd) { console.log('LINECOLOUR'); }
function MARKERBUNDLEINDEX(length, fd) { console.log('MARKERBUNDLEINDEX'); }
function MARKERTYPE(length, fd) { console.log('MARKERTYPE'); }
function MARKERSIZE(length, fd) { console.log('MARKERSIZE'); }
function MARKERCOLOUR(length, fd) { console.log('MARKERCOLOUR'); }
function TEXTBUNDLEINDEX(length, fd) { console.log('TEXTBUNDLEINDEX'); }
function TEXTFONTINDEX(length, fd) { console.log('TEXTFONTINDEX'); }
function TEXTPRECISION(length, fd) { console.log('TEXTPRECISION'); }
function CHARACTEREXPANSIONFACTOR(length, fd) { console.log('CHARACTEREXPANSIONFACTOR'); }
function CHARACTERSPACING(length, fd) { console.log('CHARACTERSPACING'); }
function TEXTCOLOUR(length, fd) { console.log('TEXTCOLOUR'); }
function CHARACTERHEIGHT(length, fd) { console.log('CHARACTERHEIGHT'); }
function CHARACTERORIENTATION(length, fd) { console.log('CHARACTERORIENTATION'); }
function TEXTPATH(length, fd) { console.log('TEXTPATH'); }
function TEXTALIGNMENT(length, fd) { console.log('TEXTALIGNMENT'); }
function CHARACTERSETINDEX(length, fd) { console.log('CHARACTERSETINDEX'); }
function ALTERNATECHARACTERSETINDEX(length, fd) { console.log('ALTERNATECHARACTERSETINDEX'); }
function FILLBUNDLEINDEX(length, fd) { console.log('FILLBUNDLEINDEX'); }
function INTERIORSTYLE(length, fd) { console.log('INTERIORSTYLE'); }
function FILLCOLOUR(length, fd) { console.log('FILLCOLOUR'); }
function HATCHINDEX(length, fd) { console.log('HATCHINDEX'); }
function PATTERNINDEX(length, fd) { console.log('PATTERNINDEX'); }
function EDGEBUNDLEINDEX(length, fd) { console.log('EDGEBUNDLEINDEX'); }
function EDGETYPE(length, fd) { console.log('EDGETYPE'); }
function EDGEWIDTH(length, fd) { console.log('EDGEWIDTH'); }
function EDGECOLOUR(length, fd) { console.log('EDGECOLOUR'); }
function EDGEVISIDILITY(length, fd) { console.log('EDGEVISIDILITY'); }
function FILLREFERENCEPOINT(length, fd) { console.log('FILLREFERENCEPOINT'); }
function PATTERNTABLE(length, fd) { console.log('PATTERNTABLE'); }
function PATTERNSIZE(length, fd) { console.log('PATTERNSIZE'); }
function COLOURTABLE(length, fd) { console.log('COLOURTABLE'); }
function ASPECTSOURCEFLAGS(length, fd) { console.log('ASPECTSOURCEFLAGS'); }
function ESCAPE(length, fd) { console.log('ESCAPE'); }
function MESSAGE(length, fd) { console.log('MESSAGE'); }
function APPLICATIONDATA(length, fd) { console.log('APPLICATIONDATA'); }


const commands = [
    [BEGINMETAFILE, ENDMETAFILE, BEGINPICTURE, BEGINPICTUREBODY, ENDPICTURE],
    [METAFILEVERSION, METAFILEDESCRIPTION, VDCTYPE, INTEGERPRECISION, REALPRECISION, INDEXPRECISION, COLOURPRECISION, COLOURINDEXPRECISION, MAXIMUMCOLOURINDEX, COLOURVALUEXTENT, METAFILEELEMENTLIST, METAFILEDEFAULTSREPLACEMENT, FONTLIST, CHARACTERSETLIST, CHARACTERCODINGANNOUNCER],
    [SCALINGMODE, COLOURSELECTIONMODE, LINEWIDTHSPECIFICATIONMODE, MARKERSIZESPECIFICATIONMODE, EDGEWIDTHSPECIFICATIONMODE, VDCEXTENT, BACKGROUNDCOLOUR],
    [VDCINTEGERPRECISION, VDCREALPRECISION, AUXILIARYCOLOUR, TRANSPARENCY, CLIPRECTANGLE, CLIPINDICATOR],
    [POLYLINE, DISJOINTPOLYLINE, POLYMARKER, TEXT, RESTRICTEDTEXT, APPENDTEXT, POLYGON, POLYGONSET, CELLARRAY, GENERALIZEDDRAWINGPRIMITIVE, RECTANGLE, CIRCLE, CIRCULARARCPOINT, CIRCULARARCPOINTCLOSE, CIRCULARARCCENTRE, CIRCULARARCCENTRECLOSE, ELLIPSE, ELLIPTICALARC, ELLIPTICALARCCLOSE],
    [LINEBUNDLEINDEX, LINETYPE, LINEWIDTH, LINECOLOUR, MARKERBUNDLEINDEX, MARKERTYPE, MARKERSIZE, MARKERCOLOUR, TEXTBUNDLEINDEX, TEXTFONTINDEX, TEXTPRECISION, CHARACTEREXPANSIONFACTOR, CHARACTERSPACING, TEXTCOLOUR, CHARACTERHEIGHT, CHARACTERORIENTATION, TEXTPATH, TEXTALIGNMENT, CHARACTERSETINDEX, ALTERNATECHARACTERSETINDEX, FILLBUNDLEINDEX, INTERIORSTYLE, FILLCOLOUR, HATCHINDEX, PATTERNINDEX, EDGEBUNDLEINDEX, EDGETYPE, EDGEWIDTH, EDGECOLOUR, EDGEVISIDILITY, FILLREFERENCEPOINT, PATTERNTABLE, PATTERNSIZE, COLOURTABLE, ASPECTSOURCEFLAGS],
    [ESCAPE],
    [MESSAGE, APPLICATIONDATA]
];

function getClass(word) {
    return word >> 12;
}
function getElement(word) {
    word = word & 4064;
    return word >> 5;
}
function getLength(word) {
    word = word & 31;
    return word;
}



fs.open('./sd.CGM', 'r', function (err, fd) {
    if (err) {
        throw err;

    }
    var buffer = new Buffer.alloc(2);
    while (true) {
        var num = fs.readSync(fd, buffer, 0, 2, null);
        if (num === 0) {
            break;
        }
        let clas = getClass(buffer.readInt16BE());
        let elem = getElement(buffer.readInt16BE());
        let len = getLength(buffer.readInt16BE());

        //console.log("class:%d, element:%d, len:%d", clas, elem, len);

        if (0 <= clas && clas < commands.length) {
            if (0 <= (elem - 1) && (elem - 1) < commands[clas].length) {
                commands[clas][(elem - 1)](len, fd);
            }

        }
    }
});




