ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:5234").setExtent([100119.118355, 174233.802031, 107681.628800, 178239.845250]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_WasteCollectionZones_3 = new ol.format.GeoJSON();
var features_WasteCollectionZones_3 = format_WasteCollectionZones_3.readFeatures(json_WasteCollectionZones_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5234'});
var jsonSource_WasteCollectionZones_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WasteCollectionZones_3.addFeatures(features_WasteCollectionZones_3);
var lyr_WasteCollectionZones_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WasteCollectionZones_3, 
                style: style_WasteCollectionZones_3,
                interactive: true,
    title: 'Waste Collection Zones<br />\
    <img src="styles/legend/WasteCollectionZones_3_0.png" /> Katubedda Zone<br />\
    <img src="styles/legend/WasteCollectionZones_3_1.png" /> Koralawella Zone<br />\
    <img src="styles/legend/WasteCollectionZones_3_2.png" /> Moratumulla Zone<br />\
    <img src="styles/legend/WasteCollectionZones_3_3.png" /> Soysapura Zone<br />\
    <img src="styles/legend/WasteCollectionZones_3_4.png" /> Town Zone<br />'
        });
var format_GnBoundary_4 = new ol.format.GeoJSON();
var features_GnBoundary_4 = format_GnBoundary_4.readFeatures(json_GnBoundary_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5234'});
var jsonSource_GnBoundary_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GnBoundary_4.addFeatures(features_GnBoundary_4);
var lyr_GnBoundary_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GnBoundary_4, 
                style: style_GnBoundary_4,
                interactive: true,
                title: '<img src="styles/legend/GnBoundary_4.png" /> Gn Boundary'
            });
var format_Wards_5 = new ol.format.GeoJSON();
var features_Wards_5 = format_Wards_5.readFeatures(json_Wards_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5234'});
var jsonSource_Wards_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wards_5.addFeatures(features_Wards_5);
var lyr_Wards_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Wards_5, 
                style: style_Wards_5,
                interactive: true,
                title: '<img src="styles/legend/Wards_5.png" /> Wards'
            });
var format_IdibeddaRoute_6 = new ol.format.GeoJSON();
var features_IdibeddaRoute_6 = format_IdibeddaRoute_6.readFeatures(json_IdibeddaRoute_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5234'});
var jsonSource_IdibeddaRoute_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IdibeddaRoute_6.addFeatures(features_IdibeddaRoute_6);
var lyr_IdibeddaRoute_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IdibeddaRoute_6, 
                style: style_IdibeddaRoute_6,
                interactive: true,
                title: '<img src="styles/legend/IdibeddaRoute_6.png" /> Idibedda  Route'
            });
var format_VillorawattaRoute_7 = new ol.format.GeoJSON();
var features_VillorawattaRoute_7 = format_VillorawattaRoute_7.readFeatures(json_VillorawattaRoute_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5234'});
var jsonSource_VillorawattaRoute_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VillorawattaRoute_7.addFeatures(features_VillorawattaRoute_7);
var lyr_VillorawattaRoute_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VillorawattaRoute_7, 
                style: style_VillorawattaRoute_7,
                interactive: true,
                title: '<img src="styles/legend/VillorawattaRoute_7.png" /> Villorawatta Route'
            });
var format_Kadalana_SWM__8 = new ol.format.GeoJSON();
var features_Kadalana_SWM__8 = format_Kadalana_SWM__8.readFeatures(json_Kadalana_SWM__8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5234'});
var jsonSource_Kadalana_SWM__8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kadalana_SWM__8.addFeatures(features_Kadalana_SWM__8);
var lyr_Kadalana_SWM__8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kadalana_SWM__8, 
                style: style_Kadalana_SWM__8,
                interactive: true,
                title: '<img src="styles/legend/Kadalana_SWM__8.png" /> Kadalana_SWM_'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_WasteCollectionZones_3.setVisible(true);lyr_GnBoundary_4.setVisible(true);lyr_Wards_5.setVisible(true);lyr_IdibeddaRoute_6.setVisible(true);lyr_VillorawattaRoute_7.setVisible(true);lyr_Kadalana_SWM__8.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,lyr_OpenStreetMap_2,lyr_WasteCollectionZones_3,lyr_GnBoundary_4,lyr_Wards_5,lyr_IdibeddaRoute_6,lyr_VillorawattaRoute_7,lyr_Kadalana_SWM__8];
lyr_WasteCollectionZones_3.set('fieldAliases', {'Zone_Name': 'Zone_Name', });
lyr_GnBoundary_4.set('fieldAliases', {'Name': 'Name', });
lyr_Wards_5.set('fieldAliases', {'Ward_Name': 'Ward_Name', });
lyr_IdibeddaRoute_6.set('fieldAliases', {'Name': 'Name', 'Degradable': 'Degradable', 'Plastic': 'Plastic', 'Glass': 'Glass', });
lyr_VillorawattaRoute_7.set('fieldAliases', {'Name': 'Name', 'Degradable': 'Degradable', 'Polythene': 'Polythene', 'Glass': 'Glass', });
lyr_Kadalana_SWM__8.set('fieldAliases', {'Name': 'Name', 'Degradable': 'Degradable', 'Polythene': 'Polythene', 'Glass': 'Glass', });
lyr_WasteCollectionZones_3.set('fieldImages', {'Zone_Name': 'TextEdit', });
lyr_GnBoundary_4.set('fieldImages', {'Name': 'TextEdit', });
lyr_Wards_5.set('fieldImages', {'Ward_Name': 'TextEdit', });
lyr_IdibeddaRoute_6.set('fieldImages', {'Name': 'TextEdit', 'Degradable': 'TextEdit', 'Plastic': 'TextEdit', 'Glass': 'TextEdit', });
lyr_VillorawattaRoute_7.set('fieldImages', {'Name': 'TextEdit', 'Degradable': 'TextEdit', 'Polythene': 'TextEdit', 'Glass': 'TextEdit', });
lyr_Kadalana_SWM__8.set('fieldImages', {'Name': 'TextEdit', 'Degradable': 'TextEdit', 'Polythene': 'TextEdit', 'Glass': 'TextEdit', });
lyr_WasteCollectionZones_3.set('fieldLabels', {'Zone_Name': 'no label', });
lyr_GnBoundary_4.set('fieldLabels', {'Name': 'no label', });
lyr_Wards_5.set('fieldLabels', {'Ward_Name': 'no label', });
lyr_IdibeddaRoute_6.set('fieldLabels', {'Name': 'no label', 'Degradable': 'inline label', 'Plastic': 'inline label', 'Glass': 'inline label', });
lyr_VillorawattaRoute_7.set('fieldLabels', {'Name': 'no label', 'Degradable': 'inline label', 'Polythene': 'inline label', 'Glass': 'inline label', });
lyr_Kadalana_SWM__8.set('fieldLabels', {'Name': 'no label', 'Degradable': 'inline label', 'Polythene': 'inline label', 'Glass': 'inline label', });
lyr_Kadalana_SWM__8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});