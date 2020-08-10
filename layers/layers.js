var wms_layers = [];


        var lyr_EsriTopoWorld_0 = new ol.layer.Tile({
            'title': 'Esri Topo World',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Rservesdechasseetdefaunesauvage_1 = new ol.format.GeoJSON();
var features_Rservesdechasseetdefaunesauvage_1 = format_Rservesdechasseetdefaunesauvage_1.readFeatures(json_Rservesdechasseetdefaunesauvage_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rservesdechasseetdefaunesauvage_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rservesdechasseetdefaunesauvage_1.addFeatures(features_Rservesdechasseetdefaunesauvage_1);
var lyr_Rservesdechasseetdefaunesauvage_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rservesdechasseetdefaunesauvage_1, 
                style: style_Rservesdechasseetdefaunesauvage_1,
                interactive: true,
                title: '<img src="styles/legend/Rservesdechasseetdefaunesauvage_1.png" /> Réserves de chasse et de faune sauvage'
            });
var format_Dpartement_2 = new ol.format.GeoJSON();
var features_Dpartement_2 = format_Dpartement_2.readFeatures(json_Dpartement_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dpartement_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dpartement_2.addFeatures(features_Dpartement_2);
var lyr_Dpartement_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dpartement_2, 
                style: style_Dpartement_2,
                interactive: false,
                title: '<img src="styles/legend/Dpartement_2.png" /> Département'
            });

lyr_EsriTopoWorld_0.setVisible(true);lyr_Rservesdechasseetdefaunesauvage_1.setVisible(true);lyr_Dpartement_2.setVisible(true);
var layersList = [lyr_EsriTopoWorld_0,lyr_Rservesdechasseetdefaunesauvage_1,lyr_Dpartement_2];
lyr_Rservesdechasseetdefaunesauvage_1.set('fieldAliases', {'Identifiant': 'Identifiant', 'DETENTEUR': 'DETENTEUR', 'DATE_ARRET': 'DATE_ARRET', 'Surface de la réserve en ha': 'Surface de la réserve en ha', });
lyr_Dpartement_2.set('fieldAliases', {'ID': 'ID', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'NOM': 'NOM', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'ID_AUT_ADM': 'ID_AUT_ADM', });
lyr_Rservesdechasseetdefaunesauvage_1.set('fieldImages', {'Identifiant': 'TextEdit', 'DETENTEUR': 'TextEdit', 'DATE_ARRET': 'DateTime', 'Surface de la réserve en ha': 'TextEdit', });
lyr_Dpartement_2.set('fieldImages', {'ID': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'NOM': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'ID_AUT_ADM': 'TextEdit', });
lyr_Rservesdechasseetdefaunesauvage_1.set('fieldLabels', {'Identifiant': 'no label', 'DETENTEUR': 'no label', 'DATE_ARRET': 'no label', 'Surface de la réserve en ha': 'no label', });
lyr_Dpartement_2.set('fieldLabels', {'ID': 'no label', 'INSEE_DEP': 'no label', 'INSEE_REG': 'no label', 'NOM': 'no label', 'DATE_CREAT': 'no label', 'DATE_MAJ': 'no label', 'DATE_APP': 'no label', 'DATE_CONF': 'no label', 'ID_AUT_ADM': 'no label', });
lyr_Dpartement_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});