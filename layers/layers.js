var wms_layers = [];


        var lyr_bing_0 = new ol.layer.Tile({
            'title': 'bing',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://ecn.t3.tiles.virtualearth.net/tiles/a{q}.jpeg?g=1&key=[YourBingMapskey]'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'GoogleMaps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSat_3 = new ol.layer.Tile({
            'title': 'GoogleSat',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var lyr_SRTM30_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "SRTM30",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SRTM30_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [2776528.495175, 5066377.531408, 2797150.682425, 5077510.083554]
                            })
                        });
var format_MT_Lines_5 = new ol.format.GeoJSON();
var features_MT_Lines_5 = format_MT_Lines_5.readFeatures(json_MT_Lines_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MT_Lines_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT_Lines_5.addFeatures(features_MT_Lines_5);
var lyr_MT_Lines_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MT_Lines_5, 
                style: style_MT_Lines_5,
                interactive: true,
                title: '<img src="styles/legend/MT_Lines_5.png" /> MT_Lines'
            });
var format_MT_Points_v1_6 = new ol.format.GeoJSON();
var features_MT_Points_v1_6 = format_MT_Points_v1_6.readFeatures(json_MT_Points_v1_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MT_Points_v1_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT_Points_v1_6.addFeatures(features_MT_Points_v1_6);
var lyr_MT_Points_v1_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MT_Points_v1_6, 
                style: style_MT_Points_v1_6,
                interactive: true,
                title: 'MT_Points_v1'
            });
var group_MT = new ol.layer.Group({
                                layers: [lyr_MT_Lines_5,],
                                title: "MT"});
var group_TOPO = new ol.layer.Group({
                                layers: [lyr_SRTM30_4,],
                                title: "TOPO"});
var group_BASE = new ol.layer.Group({
                                layers: [lyr_bing_0,lyr_GoogleMaps_1,lyr_OpenStreetMap_2,lyr_GoogleSat_3,],
                                title: "BASE"});

lyr_bing_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_GoogleSat_3.setVisible(true);lyr_SRTM30_4.setVisible(true);lyr_MT_Lines_5.setVisible(true);lyr_MT_Points_v1_6.setVisible(true);
var layersList = [group_BASE,group_TOPO,group_MT,lyr_MT_Points_v1_6];
lyr_MT_Lines_5.set('fieldAliases', {'LineId': 'LineId', });
lyr_MT_Points_v1_6.set('fieldAliases', {'PointId': 'PointId', 'LineId': 'LineId', 'SRTM30': 'SRTM30', });
lyr_MT_Lines_5.set('fieldImages', {'LineId': '', });
lyr_MT_Points_v1_6.set('fieldImages', {'PointId': 'TextEdit', 'LineId': 'TextEdit', 'SRTM30': 'Range', });
lyr_MT_Lines_5.set('fieldLabels', {});
lyr_MT_Points_v1_6.set('fieldLabels', {'PointId': 'inline label', 'LineId': 'inline label', 'SRTM30': 'inline label', });
lyr_MT_Points_v1_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});