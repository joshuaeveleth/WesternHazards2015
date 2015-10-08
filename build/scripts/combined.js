function addCommas(e){e+="";for(var i=e.split("."),a=i[0],t=i.length>1?"."+i[1]:"",s=/(\d+)(\d{3})/;s.test(a);)a=a.replace(s,"$1,$2");return a+t}function camelize(e){return e.replace(/(?:^\w|[A-Z]|\b\w)/g,function(e,i){return 0==i?e.toLowerCase():e.toUpperCase()}).replace(/\s+/g,"")}var allLayers;require(["esri/geometry/Extent","esri/layers/WMSLayerInfo","esri/layers/FeatureLayer","dojo/domReady!"],function(e,i,a){allLayers=[{groupHeading:"Hazards",showGroupHeading:!0,includeInLayerList:!0,layers:{Floods:{url:"http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",visibleLayers:[0],options:{id:"floods",opacity:.75,visible:!0},wimOptions:{type:"layer",layerType:"agisDynamic",includeInLayerList:!0,zoomScale:144448,hasOpacitySlider:!0,includeLegend:!0}},Wildfires:{url:"http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",visibleLayers:[10],options:{id:"wildfires",opacity:.75,visible:!0},wimOptions:{type:"layer",layerType:"agisDynamic",includeInLayerList:!0,zoomScale:144448,hasOpacitySlider:!0,includeLegend:!0}},"Wildfire perimeters":{url:"http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",visibleLayers:[11],options:{id:"wildfirePerimeters",opacity:.75,visible:!0},wimOptions:{type:"layer",layerType:"agisDynamic",includeInLayerList:!0,zoomScale:144448,hasOpacitySlider:!0,includeLegend:!0}},Severe:{url:"http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",visibleLayers:[12],options:{id:"severe",opacity:.75,visible:!0},wimOptions:{type:"layer",layerType:"agisDynamic",includeInLayerList:!0,zoomScale:144448,hasOpacitySlider:!0,includeLegend:!0}},Warnings:{url:"http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",visibleLayers:[13],options:{id:"warnings",opacity:.75,visible:!0},wimOptions:{type:"layer",layerType:"agisDynamic",includeInLayerList:!0,zoomScale:144448,hasOpacitySlider:!0,includeLegend:!0}},Watches:{url:"http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",visibleLayers:[14],options:{id:"watches",opacity:.75,visible:!0},wimOptions:{type:"layer",layerType:"agisDynamic",includeInLayerList:!0,zoomScale:144448,hasOpacitySlider:!0,includeLegend:!0}},Advisories:{url:"http://igems.doi.gov/ArcGIS/rest/services/igems_haz/MapServer",visibleLayers:[15],options:{id:"advisories",opacity:.75,visible:!0},wimOptions:{type:"layer",layerType:"agisDynamic",includeInLayerList:!0,zoomScale:144448,hasOpacitySlider:!0,includeLegend:!0}},"Significant River Flood Outlook":{url:"http://gis.srh.noaa.gov/arcgis/rest/services/FOP/MapServer",visibleLayers:[0],options:{id:"sigRiverFloodOutlook",opacity:.75,visible:!0},wimOptions:{type:"layer",layerType:"agisDynamic",includeInLayerList:!0,hasOpacitySlider:!0,includeLegend:!0}}}},{groupHeading:"CPC Layers",showGroupHeading:!0,includeInLayerList:!0,layers:{"3-7 Day Temperature Outlook":{url:"http://gis.srh.noaa.gov/arcgis/rest/services/cpc_weather_hazards/MapServer",visibleLayers:[0],options:{id:"temp3day",opacity:.75,visible:!1},wimOptions:{type:"layer",layerType:"agisDynamic",includeInLayerList:!0,hasOpacitySlider:!0,includeLegend:!0}},"8-14 Day Temperature Outlook":{url:"http://gis.srh.noaa.gov/arcgis/rest/services/cpc_weather_hazards/MapServer",visibleLayers:[1],options:{id:"temp8day",opacity:.75,visible:!1},wimOptions:{type:"layer",layerType:"agisDynamic",includeInLayerList:!0,hasOpacitySlider:!0,includeLegend:!0}},"6-10 Day Precipitation Outlook":{url:"http://www.cpc.ncep.noaa.gov/products/predictions/610day/610prcp_latest.kml",options:{id:"precip6day",opacity:.75,visible:!1},wimOptions:{type:"layer",layerType:"kml",includeInLayerList:!0,hasOpacitySlider:!0,includeLegend:!0}},"8-14 Day Precipitation Outlook":{url:"http://www.cpc.ncep.noaa.gov/products/predictions/814day/814prcp_latest.kml",options:{id:"precip8day",opacity:.75,visible:!1},wimOptions:{type:"layer",layerType:"kml",includeInLayerList:!0,hasOpacitySlider:!0,includeLegend:!0}},"3-7 Day Wildfire and Drought":{url:"http://gis.srh.noaa.gov/arcgis/rest/services/cpc_weather_hazards/MapServer",visibleLayers:[4],options:{id:"wildfire3day",opacity:.75,visible:!1},wimOptions:{type:"layer",layerType:"agisDynamic",includeInLayerList:!0,hasOpacitySlider:!0,includeLegend:!0}},"8-14 Day Wildfire and Drought":{url:"http://gis.srh.noaa.gov/arcgis/rest/services/cpc_weather_hazards/MapServer",visibleLayers:[5],options:{id:"wildfire8day",opacity:.75,visible:!1},wimOptions:{type:"layer",layerType:"agisDynamic",includeInLayerList:!0,hasOpacitySlider:!0,includeLegend:!0}}}},{groupHeading:"Long Lead Outlook Precipitation",showGroupHeading:!0,includeInLayerList:!0,layers:{Monthly:{url:"http://www.cpc.ncep.noaa.gov/products/predictions/30day/lead14_prcp.kml"+(new Date).getTime(),visibleLayers:[0],options:{id:"monthly",opacity:.75,visible:!0},wimOptions:{type:"layer",layerType:"agisDynamic",includeInLayerList:!0,hasOpacitySlider:!0,includeLegend:!0}},"1.5 month":{url:"http://www.cpc.ncep.noaa.gov/products/predictions/90day/lead2_prcp.kml",visibleLayers:[1],options:{id:"15month",opacity:.75,visible:!0},wimOptions:{type:"layer",layerType:"agisDynamic",includeInLayerList:!0,hasOpacitySlider:!0,includeLegend:!0}},"2.5 month":{url:"http://www.cpc.ncep.noaa.gov/products/predictions/90day/lead3_prcp.kml",options:{id:"25month",opacity:.75,visible:!0},wimOptions:{type:"layer",layerType:"kml",includeInLayerList:!0,hasOpacitySlider:!0,includeLegend:!0}},"3.5 month":{url:"http://www.cpc.ncep.noaa.gov/products/predictions/90day/lead4_prcp.kml",options:{id:"35month",opacity:.75,visible:!0},wimOptions:{type:"layer",layerType:"kml",includeInLayerList:!0,hasOpacitySlider:!0,includeLegend:!0}},"4.5 month":{url:"http://www.cpc.ncep.noaa.gov/products/predictions/90day/lead5_prcp.kml",visibleLayers:[4],options:{id:"45month",opacity:.75,visible:!0},wimOptions:{type:"layer",layerType:"agisDynamic",includeInLayerList:!0,hasOpacitySlider:!0,includeLegend:!0}},"5.5 month":{url:"http://www.cpc.ncep.noaa.gov/products/predictions/90day/lead6_prcp.kml",visibleLayers:[5],options:{id:"55month",opacity:.75,visible:!0},wimOptions:{type:"layer",layerType:"agisDynamic",includeInLayerList:!0,hasOpacitySlider:!0,includeLegend:!0}}}}]});var map,allLayers,maxLegendHeight,maxLegendDivHeight,dragInfoWindows=!0,legendLayers=[];require(["esri/arcgis/utils","esri/map","esri/dijit/HomeButton","esri/dijit/Legend","esri/dijit/LocateButton","esri/layers/ArcGISTiledMapServiceLayer","esri/dijit/Geocoder","esri/dijit/PopupTemplate","esri/graphic","esri/geometry/Extent","esri/geometry/Multipoint","esri/SpatialReference","esri/symbols/PictureMarkerSymbol","esri/geometry/webMercatorUtils","esri/urlUtils","dojo/dnd/Moveable","dojo/query","dojo/dom","dojo/dom-class","dojo/on","dojo/domReady!"],function(e,i,a,t,s,n,o,r,l,p,c,d,y,g,m,u,h,v,f,b){function w(){1===v.byId("chkExtent").checked?_.activeGeocoder.searchExtent=map.extent:_.activeGeocoder.searchExtent=null}function L(){w();var e=_.find();e.then(function(e){O(e)}),$("#geosearchModal").modal("hide")}function S(e){D();var i=e.graphic?e.graphic:e.result.feature;i.setSymbol(C),k(e.result,i.symbol),$("#geosearchModal").modal("hide")}function O(e){if(e=e.results,e.length>0){D();for(var i=C,a=0;a<e.length;a++)k(e[a],i);I(e)}}function x(e){var i=e.indexOf(",");return i>0&&(e=e.substring(0,i)),e}function k(e,i){var a,t,s,n,o={};s=e.feature.geometry,o.address=e.name,o.score=e.feature.attributes.Score,a={address:x(o.address),score:o.score,lat:s.getLatitude().toFixed(2),lon:s.getLongitude().toFixed(2)},t=new r({title:"{address}",description:"Latitude: {lat}<br/>Longitude: {lon}"}),n=new l(s,i,a,t),map.graphics.add(n)}function I(e){for(var i=new c(map.spatialReference),a=0;a<e.length;a++)i.addPoint(e[a].feature.geometry);map.setExtent(i.getExtent().expand(2))}function D(){map.infoWindow.hide(),map.graphics.clear()}function T(e,i,a,t,s){return new y({angle:0,xoffset:i,yoffset:a,type:"esriPMS",url:e,contentType:"image/png",width:t,height:s})}m.addProxyRule({urlPrefix:"www.cpc.ncep.noaa.gov",proxyUrl:"http://107.20.228.18/serviceProxy/proxy.ashx"}),map=i("mapDiv",{basemap:"topo",extent:new p(-14638882.654811008,2641706.3772205533,-6821514.898031538,6403631.161302788,new d({wkid:3857}))});var z=new a({map:map},"homeButton");z.startup();var H=new s({map:map},"locateButton");H.startup(),$(window).resize(function(){$("#legendCollapse").hasClass("in")?(maxLegendHeight=.9*$("#mapDiv").height(),$("#legendElement").css("height",maxLegendHeight),$("#legendElement").css("max-height",maxLegendHeight),maxLegendDivHeight=$("#legendElement").height()-parseInt($("#legendHeading").css("height").replace("px","")),$("#legendDiv").css("max-height",maxLegendDivHeight)):$("#legendElement").css("height","initial")}),b(map,"load",function(){var e=map.getScale().toFixed(0);$("#scale")[0].innerHTML=addCommas(e);var i=g.webMercatorToGeographic(map.extent.getCenter());if($("#latitude").html(i.y.toFixed(3)),$("#longitude").html(i.x.toFixed(3)),1==dragInfoWindows){var a=h(".title",map.infoWindow.domNode)[0],t=new u(map.infoWindow.domNode,{handle:a});b(t,"FirstMove",function(){var e=h(".outerPointer",map.infoWindow.domNode)[0];f.add(e,"hidden");var e=h(".pointer",map.infoWindow.domNode)[0];f.add(e,"hidden")}.bind(this))}}),$(window).resize(function(){$("#legendCollapse").hasClass("in")?(maxLegendHeight=.9*$("#mapDiv").height(),$("#legendElement").css("height",maxLegendHeight),$("#legendElement").css("max-height",maxLegendHeight),maxLegendDivHeight=$("#legendElement").height()-parseInt($("#legendHeading").css("height").replace("px","")),$("#legendDiv").css("max-height",maxLegendDivHeight)):$("#legendElement").css("height","initial")}),b(map,"zoom-end",function(){var e=map.getScale().toFixed(0);$("#scale")[0].innerHTML=addCommas(e)}),b(map,"mouse-move",function(e){if($("#mapCenterLabel").css("display","none"),null!=e.mapPoint){var i=g.webMercatorToGeographic(e.mapPoint);$("#latitude").html(i.y.toFixed(3)),$("#longitude").html(i.x.toFixed(3))}}),b(map,"pan-end",function(){$("#mapCenterLabel").css("display","inline");var e=g.webMercatorToGeographic(map.extent.getCenter());$("#latitude").html(e.y.toFixed(3)),$("#longitude").html(e.x.toFixed(3))});var M=new n("http://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer");b(v.byId("btnStreets"),"click",function(){map.setBasemap("streets"),map.removeLayer(M)}),b(v.byId("btnSatellite"),"click",function(){map.setBasemap("satellite"),map.removeLayer(M)}),b(v.byId("btnHybrid"),"click",function(){map.setBasemap("hybrid"),map.removeLayer(M)}),b(v.byId("btnTerrain"),"click",function(){map.setBasemap("terrain"),map.removeLayer(M)}),b(v.byId("btnGray"),"click",function(){map.setBasemap("gray"),map.removeLayer(M)}),b(v.byId("btnNatGeo"),"click",function(){map.setBasemap("national-geographic"),map.removeLayer(M)}),b(v.byId("btnOSM"),"click",function(){map.setBasemap("osm"),map.removeLayer(M)}),b(v.byId("btnTopo"),"click",function(){map.setBasemap("topo"),map.removeLayer(M)}),b(v.byId("btnNatlMap"),"click",function(){map.addLayer(M)}),b(map,"click",function(e){var i=new l,a=i,t=new esri.InfoTemplate("test popup","attributes appear here");a.setInfoTemplate(t),map.infoWindow.setFeatures([a]),map.infoWindow.show(e.mapPoint),map.infoWindow.show()});var _=new o({value:"",maxLocations:25,autoComplete:!0,arcgisGeocoder:!0,autoNavigate:!1,map:map},"geosearch");_.startup(),_.on("select",S),_.on("findResults",O),_.on("clear",D),b(_.inputNode,"keydown",function(e){13==e.keyCode&&w()});var C=T("../images/purple-pin.png",0,12,13,24);map.on("load",function(){map.infoWindow.set("highlight",!1),map.infoWindow.set("titleInBody",!1)}),b(v.byId("btnGeosearch"),"click",L),$(document).ready(function(){function e(){$("#geosearchModal").modal("show")}$("#geosearchNav").click(function(){e()}),$("#html").niceScroll(),$("#sidebar").niceScroll(),$("#sidebar").scroll(function(){$("#sidebar").getNiceScroll().resize()}),maxLegendHeight=.9*$("#mapDiv").height(),$("#legendElement").css("max-height",maxLegendHeight),maxLegendDivHeight=maxLegendHeight-parseInt($("#legendHeading").css("height").replace("px","")),$("#legendDiv").css("max-height",maxLegendDivHeight),$("#legendCollapse").on("shown.bs.collapse",function(){if(0==legendDiv.innerHTML.length){var e=new t({map:map,layerInfos:legendLayers},"legendDiv");e.startup(),$("#legendDiv").niceScroll()}}),$("#legendCollapse").on("hide.bs.collapse",function(){$("#legendElement").css("height","initial")})}),require(["esri/tasks/locator","esri/tasks/query","esri/tasks/QueryTask","esri/graphicsUtils","esri/geometry/Point","esri/geometry/Extent","esri/layers/ArcGISDynamicMapServiceLayer","esri/layers/FeatureLayer","esri/layers/KMLLayer","esri/layers/WMSLayer","esri/layers/WMSLayerInfo","dijit/form/CheckBox","dijit/form/RadioButton","dojo/query","dojo/dom","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/on"],function(e,i,a,t,s,n,o,r,l,p,c,d,y,g,m,u,h,v,f){function b(e,i,a,t,s,n,o){if(map.addLayer(a),w.push([s,camelize(t),a]),s){if(!$("#"+camelize(s)).length){var r=$('<div id="'+camelize(s+" Root")+'" class="btn-group-vertical lyrTog" style="cursor: pointer;" data-toggle="buttons"> <button type="button" class="btn btn-default active" aria-pressed="true" style="font-weight: bold;text-align: left"><i class="glyphspan fa fa-check-square-o"></i>&nbsp;&nbsp;'+s+"</button> </div>");r.click(function(e){r.find("i.glyphspan").toggleClass("fa-check-square-o fa-square-o"),$.each(w,function(e,i){var a=map.getLayer(i[2].id);if(i[0]==s)if($("#"+i[1]).find("i.glyphspan").hasClass("fa-dot-circle-o")&&r.find("i.glyphspan").hasClass("fa-check-square-o")){console.log("adding layer: ",i[1]),map.addLayer(i[2]);var a=map.getLayer(i[2].id);a.setVisibility(!0)}else r.find("i.glyphspan").hasClass("fa-square-o")&&(console.log("removing layer: ",i[1]),map.removeLayer(i[2]))})});var l=$('<div id="'+camelize(s)+'" class="btn-group-vertical" data-toggle="buttons"></div');$("#toggle").append(l)}if(a.visible)var p=$('<div id="'+camelize(t)+'" class="btn-group-vertical lyrTog" style="cursor: pointer;" data-toggle="buttons"> <label class="btn btn-default"  style="font-weight: bold;text-align: left"> <input type="radio" name="'+camelize(s)+'" autocomplete="off"><i class="glyphspan fa fa-dot-circle-o '+camelize(s)+'"></i>&nbsp;&nbsp;'+t+"</label> </div>");else var p=$('<div id="'+camelize(t)+'" class="btn-group-vertical lyrTog" style="cursor: pointer;" data-toggle="buttons"> <label class="btn btn-default"  style="font-weight: bold;text-align: left"> <input type="radio" name="'+camelize(s)+'" autocomplete="off"><i class="glyphspan fa fa-circle-o '+camelize(s)+'"></i>&nbsp;&nbsp;'+t+"</label> </div>");$("#"+camelize(s)).append(p),p.click(function(e){if($(this).find("i.glyphspan").hasClass("fa-circle-o")){$(this).find("i.glyphspan").toggleClass("fa-dot-circle-o fa-circle-o");var i=$(this)[0].id;$.each(w,function(e,a){if(a[0]==s)if(a[1]==i&&$("#"+camelize(s+" Root")).find("i.glyphspan").hasClass("fa-check-square-o")){console.log("adding layer: ",a[1]),map.addLayer(a[2]);var t=map.getLayer(a[2].id);t.setVisibility(!0)}else a[1]==i&&$("#"+camelize(s+" Root")).find("i.glyphspan").hasClass("fa-square-o")?console.log("groud heading not checked"):(console.log("removing layer: ",a[1]),map.removeLayer(a[2]),$("#"+a[1]).find("i.glyphspan").hasClass("fa-dot-circle-o")&&$("#"+a[1]).find("i.glyphspan").toggleClass("fa-dot-circle-o fa-circle-o"))})}})}else{if(a.visible&&void 0!==o.hasOpacitySlider&&1==o.hasOpacitySlider)var p=$('<div class="btn-group-vertical lyrTog" style="cursor: pointer;" data-toggle="buttons"> <button type="button" class="btn btn-default active" aria-pressed="true" style="font-weight: bold;text-align: left"><i class="glyphspan fa fa-check-square-o"></i>&nbsp;&nbsp;'+t+'<span id="opacity'+camelize(t)+'" class="glyphspan glyphicon glyphicon-adjust pull-right"></button></span></div>');else if(a.visible||void 0===o.hasOpacitySlider||1!=o.hasOpacitySlider)if(a.visible)var p=$('<div class="btn-group-vertical lyrTog" style="cursor: pointer;" data-toggle="buttons"> <button type="button" class="btn btn-default active" aria-pressed="true" style="font-weight: bold;text-align: left"><i class="glyphspan fa fa-check-square-o"></i>&nbsp;&nbsp;'+t+"</button></span></div>");else var p=$('<div class="btn-group-vertical lyrTog" style="cursor: pointer;" data-toggle="buttons"> <button type="button" class="btn btn-default" aria-pressed="true" style="font-weight: bold;text-align: left"><i class="glyphspan fa fa-square-o"></i>&nbsp;&nbsp;'+t+"</button> </div>");else var p=$('<div class="btn-group-vertical lyrTog" style="cursor: pointer;" data-toggle="buttons"> <button type="button" class="btn btn-default" aria-pressed="true" style="font-weight: bold;text-align: left"><i class="glyphspan fa fa-square-o"></i>&nbsp;&nbsp;'+t+'<span id="opacity'+camelize(t)+'" class="glyphspan glyphicon glyphicon-adjust pull-right"></button></span></div>');p.click(function(e){$(this).find("i.glyphspan").toggleClass("fa-check-square-o fa-square-o"),$(this).find("button").button("toggle"),e.preventDefault(),e.stopPropagation(),$("#"+camelize(t)).toggle(),a.visible?a.setVisibility(!1):a.setVisibility(!0)})}if(i){var c=camelize(e);if(!$("#"+c).length){var d=$('<div id="'+c+'"><div class="alert alert-info" role="alert"><strong>'+e+"</strong></div></div>");$("#toggle").append(d)}s?($("#"+c).append(r),$("#"+c).append(l)):($("#"+c).append(p),$("#opacity"+camelize(t)).length>0&&$("#opacity"+camelize(t)).hover(function(){$(".opacitySlider").remove();var e=map.getLayer(n.id).opacity,i=$('<div class="opacitySlider"><label id="opacityValue">Opacity: '+e+'</label><label class="opacityClose pull-right">X</label><input id="slider" type="range"></div>');$("body").append(i),$("#slider")[0].value=100*e,$(".opacitySlider").css("left",event.clientX-180),$(".opacitySlider").css("top",event.clientY-50),$(".opacitySlider").mouseleave(function(){$(".opacitySlider").remove()}),$(".opacityClose").click(function(){$(".opacitySlider").remove()}),$("#slider").change(function(e){var i=$("#slider")[0].value/100;console.log("o: "+i),$("#opacityValue").html("Opacity: "+i),map.getLayer(n.id).setOpacity(i)})}))}else $("#toggle").append(p)}var w=[];$.each(allLayers,function(e,i){console.log("processing: ",i.groupHeading),$.each(i.layers,function(e,a){var t="";if(a.wimOptions.exclusiveGroupName&&(t=a.wimOptions.exclusiveGroupName),"agisFeature"===a.wimOptions.layerType){var s=new r(a.url,a.options);a.wimOptions&&1==a.wimOptions.includeLegend&&legendLayers.unshift({layer:s,title:e}),b(i.groupHeading,i.showGroupHeading,s,e,t,a.options,a.wimOptions)}else if("agisWMS"===a.wimOptions.layerType){var s=new p(a.url,{resourceInfo:a.options.resourceInfo,visibleLayers:a.options.visibleLayers},a.options);a.wimOptions&&1==a.wimOptions.includeLegend&&legendLayers.unshift({layer:s,title:e}),b(i.groupHeading,i.showGroupHeading,s,e,t,a.options,a.wimOptions)}else if("agisDynamic"===a.wimOptions.layerType){var s=new o(a.url,a.options);a.wimOptions&&1==a.wimOptions.includeLegend&&legendLayers.unshift({layer:s,title:e}),a.visibleLayers&&s.setVisibleLayers(a.visibleLayers),b(i.groupHeading,i.showGroupHeading,s,e,t,a.options,a.wimOptions)}else if("kml"===a.wimOptions.layerType){var s=new l(a.url,a.options);a.wimOptions&&1==a.wimOptions.includeLegend&&legendLayers.unshift({layer:s,title:e}),b(i.groupHeading,i.showGroupHeading,s,e,t,a.options,a.wimOptions)}})}),require(["esri/map","esri/layers/KMLLayer","dojo/domReady!"],function(e,i){new i("http://www.cpc.ncep.noaa.gov/products/predictions/threats/Prcp_D3_7.kml",{id:"prcp3"}),new i("http://www.cpc.ncep.noaa.gov/products/predictions/threats/Prcp_D8_14.kml",{id:"prcp8"}),new i("http://www.cpc.ncep.noaa.gov/products/predictions/threats/Temp_D3_7.kml",{id:"temp3"}),new i("http://www.cpc.ncep.noaa.gov/products/predictions/threats/Temp_D8_14.kml",{id:"temp8"}),new i("http://www.cpc.ncep.noaa.gov/products/predictions/threats/Soils_D3_7.kml",{id:"soil3"}),new i("http://www.cpc.ncep.noaa.gov/products/predictions/threats/Soils_D8_14.kml",{id:"soil8"}),new i("http://www.cpc.ncep.noaa.gov/products/predictions/threats/Tempprob_D8_14.kml",{id:"tempp"})})})}),$(document).ready(function(){});