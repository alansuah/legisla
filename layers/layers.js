var wms_layers = [];

var format_Porcentajevotospvem_0 = new ol.format.GeoJSON();
var features_Porcentajevotospvem_0 = format_Porcentajevotospvem_0.readFeatures(json_Porcentajevotospvem_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Porcentajevotospvem_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Porcentajevotospvem_0.addFeatures(features_Porcentajevotospvem_0);
var lyr_Porcentajevotospvem_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Porcentajevotospvem_0, 
                style: style_Porcentajevotospvem_0,
                interactive: true,
    title: 'Porcentaje votos pvem<br />\
    <img src="styles/legend/Porcentajevotospvem_0_0.png" /> 0 - 2<br />\
    <img src="styles/legend/Porcentajevotospvem_0_1.png" /> 2 - 4<br />\
    <img src="styles/legend/Porcentajevotospvem_0_2.png" /> 4 - 6<br />\
    <img src="styles/legend/Porcentajevotospvem_0_3.png" /> 6 - 8<br />\
    <img src="styles/legend/Porcentajevotospvem_0_4.png" /> 8 - 10<br />\
    <img src="styles/legend/Porcentajevotospvem_0_5.png" /> 10 - 12<br />\
    <img src="styles/legend/Porcentajevotospvem_0_6.png" /> 12 - 13.4<br />'
        });
var format_Porcentajevotosmc_1 = new ol.format.GeoJSON();
var features_Porcentajevotosmc_1 = format_Porcentajevotosmc_1.readFeatures(json_Porcentajevotosmc_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Porcentajevotosmc_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Porcentajevotosmc_1.addFeatures(features_Porcentajevotosmc_1);
var lyr_Porcentajevotosmc_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Porcentajevotosmc_1, 
                style: style_Porcentajevotosmc_1,
                interactive: true,
    title: 'Porcentaje votos mc<br />\
    <img src="styles/legend/Porcentajevotosmc_1_0.png" /> 0 - 2<br />\
    <img src="styles/legend/Porcentajevotosmc_1_1.png" /> 2 - 4<br />\
    <img src="styles/legend/Porcentajevotosmc_1_2.png" /> 4 - 6<br />\
    <img src="styles/legend/Porcentajevotosmc_1_3.png" /> 6 - 8<br />\
    <img src="styles/legend/Porcentajevotosmc_1_4.png" /> 8 - 10<br />\
    <img src="styles/legend/Porcentajevotosmc_1_5.png" /> 10 - 12<br />\
    <img src="styles/legend/Porcentajevotosmc_1_6.png" /> 12 - 14<br />\
    <img src="styles/legend/Porcentajevotosmc_1_7.png" /> 14 - 15.7<br />'
        });
var format_Porcentajevotoscoalicinpri_2 = new ol.format.GeoJSON();
var features_Porcentajevotoscoalicinpri_2 = format_Porcentajevotoscoalicinpri_2.readFeatures(json_Porcentajevotoscoalicinpri_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Porcentajevotoscoalicinpri_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Porcentajevotoscoalicinpri_2.addFeatures(features_Porcentajevotoscoalicinpri_2);
var lyr_Porcentajevotoscoalicinpri_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Porcentajevotoscoalicinpri_2, 
                style: style_Porcentajevotoscoalicinpri_2,
                interactive: true,
    title: 'Porcentaje votos coalición pri<br />\
    <img src="styles/legend/Porcentajevotoscoalicinpri_2_0.png" /> 2.6 - 10<br />\
    <img src="styles/legend/Porcentajevotoscoalicinpri_2_1.png" /> 10 - 20<br />\
    <img src="styles/legend/Porcentajevotoscoalicinpri_2_2.png" /> 20 - 30<br />\
    <img src="styles/legend/Porcentajevotoscoalicinpri_2_3.png" /> 30 - 40<br />\
    <img src="styles/legend/Porcentajevotoscoalicinpri_2_4.png" /> 40 - 50<br />\
    <img src="styles/legend/Porcentajevotoscoalicinpri_2_5.png" /> 50 - 60<br />\
    <img src="styles/legend/Porcentajevotoscoalicinpri_2_6.png" /> 60 - 70<br />\
    <img src="styles/legend/Porcentajevotoscoalicinpri_2_7.png" /> 70 - 80<br />\
    <img src="styles/legend/Porcentajevotoscoalicinpri_2_8.png" /> 80 - 83.8<br />'
        });
var format_Porcentajevotoscoalicinmorena_3 = new ol.format.GeoJSON();
var features_Porcentajevotoscoalicinmorena_3 = format_Porcentajevotoscoalicinmorena_3.readFeatures(json_Porcentajevotoscoalicinmorena_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Porcentajevotoscoalicinmorena_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Porcentajevotoscoalicinmorena_3.addFeatures(features_Porcentajevotoscoalicinmorena_3);
var lyr_Porcentajevotoscoalicinmorena_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Porcentajevotoscoalicinmorena_3, 
                style: style_Porcentajevotoscoalicinmorena_3,
                interactive: true,
    title: 'Porcentaje votos coalición morena<br />\
    <img src="styles/legend/Porcentajevotoscoalicinmorena_3_0.png" /> 15 - 20<br />\
    <img src="styles/legend/Porcentajevotoscoalicinmorena_3_1.png" /> 20 - 30<br />\
    <img src="styles/legend/Porcentajevotoscoalicinmorena_3_2.png" /> 30 - 40<br />\
    <img src="styles/legend/Porcentajevotoscoalicinmorena_3_3.png" /> 40 - 50<br />\
    <img src="styles/legend/Porcentajevotoscoalicinmorena_3_4.png" /> 50 - 60<br />\
    <img src="styles/legend/Porcentajevotoscoalicinmorena_3_5.png" /> 60 - 70<br />\
    <img src="styles/legend/Porcentajevotoscoalicinmorena_3_6.png" /> 70 - 80<br />\
    <img src="styles/legend/Porcentajevotoscoalicinmorena_3_7.png" /> 80 - 90<br />\
    <img src="styles/legend/Porcentajevotoscoalicinmorena_3_8.png" /> 90 - 94.7<br />'
        });
var format_Participacinelectoral_4 = new ol.format.GeoJSON();
var features_Participacinelectoral_4 = format_Participacinelectoral_4.readFeatures(json_Participacinelectoral_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Participacinelectoral_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Participacinelectoral_4.addFeatures(features_Participacinelectoral_4);
var lyr_Participacinelectoral_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Participacinelectoral_4, 
                style: style_Participacinelectoral_4,
                interactive: true,
    title: 'Participación electoral<br />\
    <img src="styles/legend/Participacinelectoral_4_0.png" /> 0 - 31.3<br />\
    <img src="styles/legend/Participacinelectoral_4_1.png" /> 31.3 - 41.9<br />\
    <img src="styles/legend/Participacinelectoral_4_2.png" /> 41.9 - 51.7<br />\
    <img src="styles/legend/Participacinelectoral_4_3.png" /> 51.7 - 65.5<br />\
    <img src="styles/legend/Participacinelectoral_4_4.png" /> 65.5 - 340.5<br />'
        });

lyr_Porcentajevotospvem_0.setVisible(false);lyr_Porcentajevotosmc_1.setVisible(false);lyr_Porcentajevotoscoalicinpri_2.setVisible(false);lyr_Porcentajevotoscoalicinmorena_3.setVisible(false);lyr_Participacinelectoral_4.setVisible(true);
var layersList = [lyr_Porcentajevotospvem_0,lyr_Porcentajevotosmc_1,lyr_Porcentajevotoscoalicinpri_2,lyr_Porcentajevotoscoalicinmorena_3,lyr_Participacinelectoral_4];
lyr_Porcentajevotospvem_0.set('fieldAliases', {'ENTIDAD': 'ENTIDAD', 'DISTRITO_F': 'DISTRITO_F', 'MUNICIPIO': 'MUNICIPIO', 'SECCION': 'SECCION', 'TIPO': 'TIPO', 'CONTROL': 'CONTROL', 'DISTRITO_L': 'DISTRITO_L', 'ID': 'ID', 'Geometry1_': 'Geometry1_', 'Vothgo22 — votos22_PAN': 'Vothgo22 — votos22_PAN', 'Vothgo22 — votos22_PRI': 'Vothgo22 — votos22_PRI', 'Vothgo22 — votos22_PRD': 'Vothgo22 — votos22_PRD', 'Vothgo22 — votos22_PT': 'Vothgo22 — votos22_PT', 'Vothgo22 — votos22_PVEM': 'Vothgo22 — votos22_PVEM', 'Vothgo22 — votos22_MC': 'Vothgo22 — votos22_MC', 'Vothgo22 — votos22_MORENA': 'Vothgo22 — votos22_MORENA', 'Vothgo22 — votos22_NAH': 'Vothgo22 — votos22_NAH', 'Vothgo22 — votos22_CO_MORENA': 'Vothgo22 — votos22_CO_MORENA', 'Vothgo22 — votos22_CO_PRI': 'Vothgo22 — votos22_CO_PRI', 'Vothgo22 — votos22_NO_REGISTRADOS': 'Vothgo22 — votos22_NO_REGISTRADOS', 'Vothgo22 — votos22_NULOS': 'Vothgo22 — votos22_NULOS', 'Vothgo22 — votos22_TOTAL_VOTOS_CALCULADO': 'Vothgo22 — votos22_TOTAL_VOTOS_CALCULADO', 'Vothgo22 — votos22_LISTA_NOMINAL': 'Vothgo22 — votos22_LISTA_NOMINAL', 'porc_more': 'porc_more', 'porc_pri': 'porc_pri', 'porc_pvem': 'porc_pvem', 'porc_mc': 'porc_mc', 'proc_parti': 'proc_parti', });
lyr_Porcentajevotosmc_1.set('fieldAliases', {'ENTIDAD': 'ENTIDAD', 'DISTRITO_F': 'DISTRITO_F', 'MUNICIPIO': 'MUNICIPIO', 'SECCION': 'SECCION', 'TIPO': 'TIPO', 'CONTROL': 'CONTROL', 'DISTRITO_L': 'DISTRITO_L', 'ID': 'ID', 'Geometry1_': 'Geometry1_', 'Vothgo22 — votos22_PAN': 'Vothgo22 — votos22_PAN', 'Vothgo22 — votos22_PRI': 'Vothgo22 — votos22_PRI', 'Vothgo22 — votos22_PRD': 'Vothgo22 — votos22_PRD', 'Vothgo22 — votos22_PT': 'Vothgo22 — votos22_PT', 'Vothgo22 — votos22_PVEM': 'Vothgo22 — votos22_PVEM', 'Vothgo22 — votos22_MC': 'Vothgo22 — votos22_MC', 'Vothgo22 — votos22_MORENA': 'Vothgo22 — votos22_MORENA', 'Vothgo22 — votos22_NAH': 'Vothgo22 — votos22_NAH', 'Vothgo22 — votos22_CO_MORENA': 'Vothgo22 — votos22_CO_MORENA', 'Vothgo22 — votos22_CO_PRI': 'Vothgo22 — votos22_CO_PRI', 'Vothgo22 — votos22_NO_REGISTRADOS': 'Vothgo22 — votos22_NO_REGISTRADOS', 'Vothgo22 — votos22_NULOS': 'Vothgo22 — votos22_NULOS', 'Vothgo22 — votos22_TOTAL_VOTOS_CALCULADO': 'Vothgo22 — votos22_TOTAL_VOTOS_CALCULADO', 'Vothgo22 — votos22_LISTA_NOMINAL': 'Vothgo22 — votos22_LISTA_NOMINAL', 'porc_more': 'porc_more', 'porc_pri': 'porc_pri', 'porc_pvem': 'porc_pvem', 'porc_mc': 'porc_mc', 'proc_parti': 'proc_parti', });
lyr_Porcentajevotoscoalicinpri_2.set('fieldAliases', {'ENTIDAD': 'ENTIDAD', 'DISTRITO_F': 'DISTRITO_F', 'MUNICIPIO': 'MUNICIPIO', 'SECCION': 'SECCION', 'TIPO': 'TIPO', 'CONTROL': 'CONTROL', 'DISTRITO_L': 'DISTRITO_L', 'ID': 'ID', 'Geometry1_': 'Geometry1_', 'Vothgo22 — votos22_PAN': 'Vothgo22 — votos22_PAN', 'Vothgo22 — votos22_PRI': 'Vothgo22 — votos22_PRI', 'Vothgo22 — votos22_PRD': 'Vothgo22 — votos22_PRD', 'Vothgo22 — votos22_PT': 'Vothgo22 — votos22_PT', 'Vothgo22 — votos22_PVEM': 'Vothgo22 — votos22_PVEM', 'Vothgo22 — votos22_MC': 'Vothgo22 — votos22_MC', 'Vothgo22 — votos22_MORENA': 'Vothgo22 — votos22_MORENA', 'Vothgo22 — votos22_NAH': 'Vothgo22 — votos22_NAH', 'Vothgo22 — votos22_CO_MORENA': 'Vothgo22 — votos22_CO_MORENA', 'Vothgo22 — votos22_CO_PRI': 'Vothgo22 — votos22_CO_PRI', 'Vothgo22 — votos22_NO_REGISTRADOS': 'Vothgo22 — votos22_NO_REGISTRADOS', 'Vothgo22 — votos22_NULOS': 'Vothgo22 — votos22_NULOS', 'Vothgo22 — votos22_TOTAL_VOTOS_CALCULADO': 'Vothgo22 — votos22_TOTAL_VOTOS_CALCULADO', 'Vothgo22 — votos22_LISTA_NOMINAL': 'Vothgo22 — votos22_LISTA_NOMINAL', 'porc_more': 'porc_more', 'porc_pri': 'porc_pri', 'porc_pvem': 'porc_pvem', 'porc_mc': 'porc_mc', 'proc_parti': 'proc_parti', });
lyr_Porcentajevotoscoalicinmorena_3.set('fieldAliases', {'ENTIDAD': 'ENTIDAD', 'DISTRITO_F': 'DISTRITO_F', 'MUNICIPIO': 'MUNICIPIO', 'SECCION': 'SECCION', 'TIPO': 'TIPO', 'CONTROL': 'CONTROL', 'DISTRITO_L': 'DISTRITO_L', 'ID': 'ID', 'Geometry1_': 'Geometry1_', 'Vothgo22 — votos22_PAN': 'Vothgo22 — votos22_PAN', 'Vothgo22 — votos22_PRI': 'Vothgo22 — votos22_PRI', 'Vothgo22 — votos22_PRD': 'Vothgo22 — votos22_PRD', 'Vothgo22 — votos22_PT': 'Vothgo22 — votos22_PT', 'Vothgo22 — votos22_PVEM': 'Vothgo22 — votos22_PVEM', 'Vothgo22 — votos22_MC': 'Vothgo22 — votos22_MC', 'Vothgo22 — votos22_MORENA': 'Vothgo22 — votos22_MORENA', 'Vothgo22 — votos22_NAH': 'Vothgo22 — votos22_NAH', 'Vothgo22 — votos22_CO_MORENA': 'Vothgo22 — votos22_CO_MORENA', 'Vothgo22 — votos22_CO_PRI': 'Vothgo22 — votos22_CO_PRI', 'Vothgo22 — votos22_NO_REGISTRADOS': 'Vothgo22 — votos22_NO_REGISTRADOS', 'Vothgo22 — votos22_NULOS': 'Vothgo22 — votos22_NULOS', 'Vothgo22 — votos22_TOTAL_VOTOS_CALCULADO': 'Vothgo22 — votos22_TOTAL_VOTOS_CALCULADO', 'Vothgo22 — votos22_LISTA_NOMINAL': 'Vothgo22 — votos22_LISTA_NOMINAL', 'porc_more': 'porc_more', 'porc_pri': 'porc_pri', 'porc_pvem': 'porc_pvem', 'porc_mc': 'porc_mc', 'proc_parti': 'proc_parti', });
lyr_Participacinelectoral_4.set('fieldAliases', {'ENTIDAD': 'ENTIDAD', 'DISTRITO_F': 'DISTRITO_F', 'MUNICIPIO': 'MUNICIPIO', 'SECCION': 'SECCION', 'TIPO': 'TIPO', 'CONTROL': 'CONTROL', 'DISTRITO_L': 'DISTRITO_L', 'ID': 'ID', 'Geometry1_': 'Geometry1_', 'Vothgo22 — votos22_PAN': 'Vothgo22 — votos22_PAN', 'Vothgo22 — votos22_PRI': 'Vothgo22 — votos22_PRI', 'Vothgo22 — votos22_PRD': 'Vothgo22 — votos22_PRD', 'Vothgo22 — votos22_PT': 'Vothgo22 — votos22_PT', 'Vothgo22 — votos22_PVEM': 'Vothgo22 — votos22_PVEM', 'Vothgo22 — votos22_MC': 'Vothgo22 — votos22_MC', 'Vothgo22 — votos22_MORENA': 'Vothgo22 — votos22_MORENA', 'Vothgo22 — votos22_NAH': 'Vothgo22 — votos22_NAH', 'Vothgo22 — votos22_CO_MORENA': 'Vothgo22 — votos22_CO_MORENA', 'Vothgo22 — votos22_CO_PRI': 'Vothgo22 — votos22_CO_PRI', 'Vothgo22 — votos22_NO_REGISTRADOS': 'Vothgo22 — votos22_NO_REGISTRADOS', 'Vothgo22 — votos22_NULOS': 'Vothgo22 — votos22_NULOS', 'Vothgo22 — votos22_TOTAL_VOTOS_CALCULADO': 'Vothgo22 — votos22_TOTAL_VOTOS_CALCULADO', 'Vothgo22 — votos22_LISTA_NOMINAL': 'Vothgo22 — votos22_LISTA_NOMINAL', 'porc_more': 'porc_more', 'porc_pri': 'porc_pri', 'porc_pvem': 'porc_pvem', 'porc_mc': 'porc_mc', 'proc_parti': 'proc_parti', });
lyr_Porcentajevotospvem_0.set('fieldImages', {'ENTIDAD': 'Range', 'DISTRITO_F': 'Range', 'MUNICIPIO': 'Range', 'SECCION': 'Range', 'TIPO': 'Range', 'CONTROL': 'TextEdit', 'DISTRITO_L': 'Range', 'ID': 'TextEdit', 'Geometry1_': 'TextEdit', 'Vothgo22 — votos22_PAN': 'Range', 'Vothgo22 — votos22_PRI': 'Range', 'Vothgo22 — votos22_PRD': 'Range', 'Vothgo22 — votos22_PT': 'Range', 'Vothgo22 — votos22_PVEM': 'Range', 'Vothgo22 — votos22_MC': 'Range', 'Vothgo22 — votos22_MORENA': 'Range', 'Vothgo22 — votos22_NAH': 'Range', 'Vothgo22 — votos22_CO_MORENA': 'Range', 'Vothgo22 — votos22_CO_PRI': 'Range', 'Vothgo22 — votos22_NO_REGISTRADOS': 'Range', 'Vothgo22 — votos22_NULOS': 'Range', 'Vothgo22 — votos22_TOTAL_VOTOS_CALCULADO': 'Range', 'Vothgo22 — votos22_LISTA_NOMINAL': 'Range', 'porc_more': 'TextEdit', 'porc_pri': 'TextEdit', 'porc_pvem': 'TextEdit', 'porc_mc': 'TextEdit', 'proc_parti': 'TextEdit', });
lyr_Porcentajevotosmc_1.set('fieldImages', {'ENTIDAD': 'Range', 'DISTRITO_F': 'Range', 'MUNICIPIO': 'Range', 'SECCION': 'Range', 'TIPO': 'Range', 'CONTROL': 'TextEdit', 'DISTRITO_L': 'Range', 'ID': 'TextEdit', 'Geometry1_': 'TextEdit', 'Vothgo22 — votos22_PAN': 'Range', 'Vothgo22 — votos22_PRI': 'Range', 'Vothgo22 — votos22_PRD': 'Range', 'Vothgo22 — votos22_PT': 'Range', 'Vothgo22 — votos22_PVEM': 'Range', 'Vothgo22 — votos22_MC': 'Range', 'Vothgo22 — votos22_MORENA': 'Range', 'Vothgo22 — votos22_NAH': 'Range', 'Vothgo22 — votos22_CO_MORENA': 'Range', 'Vothgo22 — votos22_CO_PRI': 'Range', 'Vothgo22 — votos22_NO_REGISTRADOS': 'Range', 'Vothgo22 — votos22_NULOS': 'Range', 'Vothgo22 — votos22_TOTAL_VOTOS_CALCULADO': 'Range', 'Vothgo22 — votos22_LISTA_NOMINAL': 'Range', 'porc_more': 'TextEdit', 'porc_pri': 'TextEdit', 'porc_pvem': 'TextEdit', 'porc_mc': 'TextEdit', 'proc_parti': 'TextEdit', });
lyr_Porcentajevotoscoalicinpri_2.set('fieldImages', {'ENTIDAD': 'Range', 'DISTRITO_F': 'Range', 'MUNICIPIO': 'Range', 'SECCION': 'Range', 'TIPO': 'Range', 'CONTROL': 'TextEdit', 'DISTRITO_L': 'Range', 'ID': 'TextEdit', 'Geometry1_': 'TextEdit', 'Vothgo22 — votos22_PAN': 'Range', 'Vothgo22 — votos22_PRI': 'Range', 'Vothgo22 — votos22_PRD': 'Range', 'Vothgo22 — votos22_PT': 'Range', 'Vothgo22 — votos22_PVEM': 'Range', 'Vothgo22 — votos22_MC': 'Range', 'Vothgo22 — votos22_MORENA': 'Range', 'Vothgo22 — votos22_NAH': 'Range', 'Vothgo22 — votos22_CO_MORENA': 'Range', 'Vothgo22 — votos22_CO_PRI': 'Range', 'Vothgo22 — votos22_NO_REGISTRADOS': 'Range', 'Vothgo22 — votos22_NULOS': 'Range', 'Vothgo22 — votos22_TOTAL_VOTOS_CALCULADO': 'Range', 'Vothgo22 — votos22_LISTA_NOMINAL': 'Range', 'porc_more': 'TextEdit', 'porc_pri': 'TextEdit', 'porc_pvem': 'TextEdit', 'porc_mc': 'TextEdit', 'proc_parti': 'TextEdit', });
lyr_Porcentajevotoscoalicinmorena_3.set('fieldImages', {'ENTIDAD': 'Range', 'DISTRITO_F': 'Range', 'MUNICIPIO': 'Range', 'SECCION': 'Range', 'TIPO': 'Range', 'CONTROL': 'TextEdit', 'DISTRITO_L': 'Range', 'ID': 'TextEdit', 'Geometry1_': 'TextEdit', 'Vothgo22 — votos22_PAN': 'Range', 'Vothgo22 — votos22_PRI': 'Range', 'Vothgo22 — votos22_PRD': 'Range', 'Vothgo22 — votos22_PT': 'Range', 'Vothgo22 — votos22_PVEM': 'Range', 'Vothgo22 — votos22_MC': 'Range', 'Vothgo22 — votos22_MORENA': 'Range', 'Vothgo22 — votos22_NAH': 'Range', 'Vothgo22 — votos22_CO_MORENA': 'Range', 'Vothgo22 — votos22_CO_PRI': 'Range', 'Vothgo22 — votos22_NO_REGISTRADOS': 'Range', 'Vothgo22 — votos22_NULOS': 'Range', 'Vothgo22 — votos22_TOTAL_VOTOS_CALCULADO': 'Range', 'Vothgo22 — votos22_LISTA_NOMINAL': 'Range', 'porc_more': 'TextEdit', 'porc_pri': 'TextEdit', 'porc_pvem': 'TextEdit', 'porc_mc': 'TextEdit', 'proc_parti': 'TextEdit', });
lyr_Participacinelectoral_4.set('fieldImages', {'ENTIDAD': 'Range', 'DISTRITO_F': 'Range', 'MUNICIPIO': 'Range', 'SECCION': 'Range', 'TIPO': 'Range', 'CONTROL': 'TextEdit', 'DISTRITO_L': 'Range', 'ID': 'TextEdit', 'Geometry1_': 'TextEdit', 'Vothgo22 — votos22_PAN': 'Range', 'Vothgo22 — votos22_PRI': 'Range', 'Vothgo22 — votos22_PRD': 'Range', 'Vothgo22 — votos22_PT': 'Range', 'Vothgo22 — votos22_PVEM': 'Range', 'Vothgo22 — votos22_MC': 'Range', 'Vothgo22 — votos22_MORENA': 'Range', 'Vothgo22 — votos22_NAH': 'Range', 'Vothgo22 — votos22_CO_MORENA': 'Range', 'Vothgo22 — votos22_CO_PRI': 'Range', 'Vothgo22 — votos22_NO_REGISTRADOS': 'Range', 'Vothgo22 — votos22_NULOS': 'Range', 'Vothgo22 — votos22_TOTAL_VOTOS_CALCULADO': 'Range', 'Vothgo22 — votos22_LISTA_NOMINAL': 'Range', 'porc_more': 'TextEdit', 'porc_pri': 'TextEdit', 'porc_pvem': 'TextEdit', 'porc_mc': 'TextEdit', 'proc_parti': 'TextEdit', });
lyr_Porcentajevotospvem_0.set('fieldLabels', {'ENTIDAD': 'no label', 'DISTRITO_F': 'no label', 'MUNICIPIO': 'no label', 'SECCION': 'no label', 'TIPO': 'no label', 'CONTROL': 'no label', 'DISTRITO_L': 'no label', 'ID': 'no label', 'Geometry1_': 'no label', 'Vothgo22 — votos22_PAN': 'no label', 'Vothgo22 — votos22_PRI': 'no label', 'Vothgo22 — votos22_PRD': 'no label', 'Vothgo22 — votos22_PT': 'no label', 'Vothgo22 — votos22_PVEM': 'inline label', 'Vothgo22 — votos22_MC': 'no label', 'Vothgo22 — votos22_MORENA': 'no label', 'Vothgo22 — votos22_NAH': 'no label', 'Vothgo22 — votos22_CO_MORENA': 'no label', 'Vothgo22 — votos22_CO_PRI': 'no label', 'Vothgo22 — votos22_NO_REGISTRADOS': 'no label', 'Vothgo22 — votos22_NULOS': 'no label', 'Vothgo22 — votos22_TOTAL_VOTOS_CALCULADO': 'no label', 'Vothgo22 — votos22_LISTA_NOMINAL': 'no label', 'porc_more': 'no label', 'porc_pri': 'no label', 'porc_pvem': 'header label', 'porc_mc': 'no label', 'proc_parti': 'no label', });
lyr_Porcentajevotosmc_1.set('fieldLabels', {'ENTIDAD': 'no label', 'DISTRITO_F': 'no label', 'MUNICIPIO': 'no label', 'SECCION': 'no label', 'TIPO': 'no label', 'CONTROL': 'no label', 'DISTRITO_L': 'no label', 'ID': 'no label', 'Geometry1_': 'no label', 'Vothgo22 — votos22_PAN': 'no label', 'Vothgo22 — votos22_PRI': 'no label', 'Vothgo22 — votos22_PRD': 'no label', 'Vothgo22 — votos22_PT': 'no label', 'Vothgo22 — votos22_PVEM': 'no label', 'Vothgo22 — votos22_MC': 'inline label', 'Vothgo22 — votos22_MORENA': 'no label', 'Vothgo22 — votos22_NAH': 'no label', 'Vothgo22 — votos22_CO_MORENA': 'no label', 'Vothgo22 — votos22_CO_PRI': 'no label', 'Vothgo22 — votos22_NO_REGISTRADOS': 'no label', 'Vothgo22 — votos22_NULOS': 'no label', 'Vothgo22 — votos22_TOTAL_VOTOS_CALCULADO': 'no label', 'Vothgo22 — votos22_LISTA_NOMINAL': 'no label', 'porc_more': 'no label', 'porc_pri': 'no label', 'porc_pvem': 'no label', 'porc_mc': 'header label', 'proc_parti': 'no label', });
lyr_Porcentajevotoscoalicinpri_2.set('fieldLabels', {'ENTIDAD': 'no label', 'DISTRITO_F': 'no label', 'MUNICIPIO': 'no label', 'SECCION': 'no label', 'TIPO': 'no label', 'CONTROL': 'no label', 'DISTRITO_L': 'no label', 'ID': 'no label', 'Geometry1_': 'no label', 'Vothgo22 — votos22_PAN': 'inline label', 'Vothgo22 — votos22_PRI': 'inline label', 'Vothgo22 — votos22_PRD': 'inline label', 'Vothgo22 — votos22_PT': 'no label', 'Vothgo22 — votos22_PVEM': 'no label', 'Vothgo22 — votos22_MC': 'no label', 'Vothgo22 — votos22_MORENA': 'no label', 'Vothgo22 — votos22_NAH': 'no label', 'Vothgo22 — votos22_CO_MORENA': 'no label', 'Vothgo22 — votos22_CO_PRI': 'inline label', 'Vothgo22 — votos22_NO_REGISTRADOS': 'no label', 'Vothgo22 — votos22_NULOS': 'no label', 'Vothgo22 — votos22_TOTAL_VOTOS_CALCULADO': 'no label', 'Vothgo22 — votos22_LISTA_NOMINAL': 'no label', 'porc_more': 'no label', 'porc_pri': 'header label', 'porc_pvem': 'no label', 'porc_mc': 'no label', 'proc_parti': 'no label', });
lyr_Porcentajevotoscoalicinmorena_3.set('fieldLabels', {'ENTIDAD': 'no label', 'DISTRITO_F': 'no label', 'MUNICIPIO': 'no label', 'SECCION': 'no label', 'TIPO': 'no label', 'CONTROL': 'no label', 'DISTRITO_L': 'no label', 'ID': 'no label', 'Geometry1_': 'no label', 'Vothgo22 — votos22_PAN': 'no label', 'Vothgo22 — votos22_PRI': 'no label', 'Vothgo22 — votos22_PRD': 'no label', 'Vothgo22 — votos22_PT': 'inline label', 'Vothgo22 — votos22_PVEM': 'no label', 'Vothgo22 — votos22_MC': 'no label', 'Vothgo22 — votos22_MORENA': 'inline label', 'Vothgo22 — votos22_NAH': 'inline label', 'Vothgo22 — votos22_CO_MORENA': 'inline label', 'Vothgo22 — votos22_CO_PRI': 'no label', 'Vothgo22 — votos22_NO_REGISTRADOS': 'no label', 'Vothgo22 — votos22_NULOS': 'no label', 'Vothgo22 — votos22_TOTAL_VOTOS_CALCULADO': 'no label', 'Vothgo22 — votos22_LISTA_NOMINAL': 'no label', 'porc_more': 'header label', 'porc_pri': 'no label', 'porc_pvem': 'no label', 'porc_mc': 'no label', 'proc_parti': 'no label', });
lyr_Participacinelectoral_4.set('fieldLabels', {'ENTIDAD': 'no label', 'DISTRITO_F': 'no label', 'MUNICIPIO': 'inline label', 'SECCION': 'header label', 'TIPO': 'no label', 'CONTROL': 'no label', 'DISTRITO_L': 'no label', 'ID': 'no label', 'Geometry1_': 'no label', 'Vothgo22 — votos22_PAN': 'no label', 'Vothgo22 — votos22_PRI': 'no label', 'Vothgo22 — votos22_PRD': 'no label', 'Vothgo22 — votos22_PT': 'no label', 'Vothgo22 — votos22_PVEM': 'no label', 'Vothgo22 — votos22_MC': 'no label', 'Vothgo22 — votos22_MORENA': 'no label', 'Vothgo22 — votos22_NAH': 'no label', 'Vothgo22 — votos22_CO_MORENA': 'no label', 'Vothgo22 — votos22_CO_PRI': 'no label', 'Vothgo22 — votos22_NO_REGISTRADOS': 'no label', 'Vothgo22 — votos22_NULOS': 'no label', 'Vothgo22 — votos22_TOTAL_VOTOS_CALCULADO': 'no label', 'Vothgo22 — votos22_LISTA_NOMINAL': 'no label', 'porc_more': 'no label', 'porc_pri': 'no label', 'porc_pvem': 'no label', 'porc_mc': 'no label', 'proc_parti': 'header label', });
lyr_Participacinelectoral_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});