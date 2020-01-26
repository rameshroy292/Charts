
var width = 650, height = 500;
var colors = d3.scaleOrdinal(d3.schemeDark2);

//first chart


var svg = d3.select("body").append("svg")
            .attr("width",width).attr("height",height);
var details = [{category:"Doctor", number: 30},{category:"Shopping", number: 25},
                {category:"Restaurants", number: 10},{category:"FastFood", number: 6},
                {category:"Internet", number: 9},{category:"Other", number: 20}]
var data = d3.pie().sort(null).value(function(d){
                return d.number;
            })(details);

console.log(data);
var segments = d3.arc() 
                 .innerRadius(120)
                 .outerRadius(180)
                 .padAngle(.05)
                 .padRadius(50);

var sections = svg.append("g").attr("transform", "translate(250,250)").selectAll("path").data(data);
sections.enter().append("path").attr("d",segments).attr("fill", function(d){
    return colors(d.data.number);
});

var content = d3.select("g").selectAll("text").data(data);
content.enter().append("text").classed("inside", true).each(function(d){
    var center = segments.centroid(d);
    d3.select(this).attr("x", center[0]).attr("y", center[1]).text(d.data.number)
})

var legends = svg.append("g").attr("transform", "translate(190, 140)").selectAll(".legends").data(data);
var legend = legends.enter().append("g").classed("legends", true)
            .attr("transform", function(d,i){
                return "translate(0,"+ (i+1)*30 +")";
            });
        
legend.append("rect").attr("width", 10).attr("height", 10).attr("fill", function(d){
    return colors(d.data.number);
});
legend.append("text").classed("label", true).text(function(d){return d.data.category;})    
                     .attr("fill", function(d){return colors(d.data.number); })
                     .attr("x", 20)
                     .attr("y", 10);

legend.append("text").classed("label", true).text(function(d){return d.data.number;})    
.attr("fill", function(d){return colors(d.data.number); })
.attr("x", 100)
.attr("y", 10);


//scond chart

var svg2 = d3.select("body").append("svg")
            .attr("width",width).attr("height",height);
var details2 = [{name:"JavaScirpt", number: 40},{name:"Java", number: 30},
                {name:"Python", number: 20},{name:"MongoDB", number: 10}]
var data2 = d3.pie().sort(null).value(function(d){
                return d.number;
            })(details2);
console.log("data2",data2[0].data.name)
var segments2 = d3.arc() 
                 .innerRadius(0)
                 .outerRadius(180)
                 .padAngle(.05)
                 .padRadius(50);

var sections2 = svg2.append("g").attr("transform", "translate(250,250)").selectAll("path").data(data2);
sections2.enter().append("path").attr("d",segments2).attr("fill", function(d){
    return colors(d.data.number);
});

var content2 = d3.select("g").selectAll("text").data(data2);
content2.enter().append("text").classed("inside", true).each(function(d){
    var center2 = segments2.centroid(d);
    d3.select(this).attr("x", center2[0]).attr("y", center2[1]).text(d.data.name)
})

var legends2 = svg2.append("g").attr("transform", "translate(470, 150)").attr("class","bg").selectAll(".legends").data(data2);
var legend2 = legends2.enter().append("g").classed("legends", true)
            .attr("transform", function(d,i){
                return "translate(0,"+ (i+1)*30 +")";
            });
        
legend2.append("rect").attr("width", 10).attr("height", 10).attr("fill", function(d){
    return colors(d.data.number);
});
legend2.append("text").classed("label", true).text(function(d){return d.data.name;})    
                     .attr("fill", function(d){return colors(d.data.number); })
                     .attr("x", 20)
                     .attr("y", 10);

legend2.append("text").classed("label", true).text(function(d){return d.data.number;})    
.attr("fill", function(d){return colors(d.data.number); })
.attr("x", 150)
.attr("y", 10);



//third chart
var svg3 = d3.select("body").append("svg")
            .attr("width",width).attr("height",height);
var details3 = [{category:"India", number: 35},{category:"Japan", number: 25},
                {category:"China", number: 20},
                {category:"Russia", number: 10},{category:"Other", number: 5}]
var data3 = d3.pie().sort(null).value(function(d){
                return d.number;
            })(details3);

console.log("data3",data3);
var segments3 = d3.arc() 
                 .innerRadius(120)
                 .outerRadius(180)
                 .padAngle(.05)
                 .padRadius(50);

var sections3 = svg3.append("g").attr("transform", "translate(250,250)").selectAll("path").data(data3);
sections3.enter().append("path").attr("d",segments3).attr("fill", function(d){
    return colors(d.data.number);
});

var content3 = d3.select("g").selectAll("text").data(data3);
content3.enter().append("text").classed("inside", true).each(function(d){
    var center3 = segments3.centroid(d);
    d3.select(this).attr("x", center3[0]).attr("y", center3[1]).text(d.data.number)
})

var legends3 = svg3.append("g").attr("transform", "translate(470, 70)").selectAll(".legends").data(data3);
var legend3 = legends3.enter().append("g").classed("legends", true)
            .attr("transform", function(d,i){
                return "translate(0,"+ (i+1)*30 +")";
            });
        
legend3.append("rect").attr("width", 10).attr("height", 10).attr("fill", function(d){
    return colors(d.data.number);
});
legend3.append("text").classed("label", true).text(function(d){return d.data.category;})    
                     .attr("fill", function(d){return colors(d.data.number); })
                     .attr("x", 20)
                     .attr("y", 10);

legend3.append("text").classed("label", true).text(function(d){return d.data.number;})    
.attr("fill", function(d){return colors(d.data.number); })
.attr("x", 150)
.attr("y", 10);


//fourth chart
var svg4 = d3.select("body").append("svg")
            .attr("width",width).attr("height",height);
var details4 = [{category:"Apple", number: 30},{category:"Banana", number: 22},
                {category:"Kiwi", number: 18},{category:"Lemon", number: 17},
                {category:"Orange", number: 8},{category:"Other", number: 5}]
var data4 = d3.pie().sort(null).startAngle(-0.5 * Math.PI)
.endAngle(0.5 * Math.PI).value(function(d){
                return d.number;
            })(details4);

console.log("data4",data4);
var segments4 = d3.arc() 
                 .innerRadius(0)
                 .outerRadius(180)
                 .padAngle(.05)
                 .padRadius(50);

var sections4 = svg4.append("g").attr("transform", "translate(250,250)").selectAll("path").data(data4);
sections4.enter().append("path").attr("d",segments4).attr("fill", function(d){
    return colors(d.data.number);
});

var content4 = d3.select("g").selectAll("text").data(data4);
content4.enter().append("text").classed("inside", true).each(function(d){
    var center4 = segments4.centroid(d);
    d3.select(this).attr("x", center4[0]).attr("y", center4[1]).text(d.data.number)
})

var legends4 = svg4.append("g").attr("transform", "translate(470, 070)").selectAll(".legends").data(data4);
var legend4 = legends4.enter().append("g").classed("legends", true)
            .attr("transform", function(d,i){
                return "translate(0,"+ (i+1)*30 +")";
            });
        
legend4.append("rect").attr("width", 10).attr("height", 10).attr("fill", function(d){
    return colors(d.data.number);
});
legend4.append("text").classed("label", true).text(function(d){return d.data.category;})    
                     .attr("fill", function(d){return colors(d.data.number); })
                     .attr("x", 20)
                     .attr("y", 10);

legend4.append("text").classed("label", true).text(function(d){return d.data.number;})    
.attr("fill", function(d){return colors(d.data.number); })
.attr("x", 150)
.attr("y", 10);



//fifth chart
var svg5 = d3.select("body").append("svg")
            .attr("width",width).attr("height",height);
var details5 = [{category:"Football", number: 40},{category:"Hockey", number: 20},
                {category:"Cricket", number: 30},{category:"Boxing", number: 10}]
var data5 = d3.pie().sort(null).startAngle(-0.5 * Math.PI)
.endAngle(0.5 * Math.PI).value(function(d){
                return d.number;
            })(details5);

console.log("data4",data4);
var segments5 = d3.arc() 
                 .innerRadius(120)
                 .outerRadius(180)
                 .padAngle(.05)
                 .padRadius(50);

var sections5 = svg5.append("g").attr("transform", "translate(250,250)").selectAll("path").data(data5);
sections5.enter().append("path").attr("d",segments5).attr("fill", function(d){
    return colors(d.data.number);
});

var content5 = d3.select("g").selectAll("text").data(data5);
content5.enter().append("text").classed("inside", true).each(function(d){
    var center5 = segments5.centroid(d);
    d3.select(this).attr("x", center5[0]).attr("y", center5[1]).text(d.data.number)
})

var legends5 = svg5.append("g").attr("transform", "translate(470, 070)").selectAll(".legends").data(data5);
var legend5 = legends5.enter().append("g").classed("legends", true)
            .attr("transform", function(d,i){
                return "translate(0,"+ (i+1)*30 +")";
            });
        
legend5.append("rect").attr("width", 10).attr("height", 10).attr("fill", function(d){
    return colors(d.data.number);
});
legend5.append("text").classed("label", true).text(function(d){return d.data.category;})    
                     .attr("fill", function(d){return colors(d.data.number); })
                     .attr("x", 20)
                     .attr("y", 10);

legend5.append("text").classed("label", true).text(function(d){return d.data.number;})    
.attr("fill", function(d){return colors(d.data.number); })
.attr("x", 150)
.attr("y", 10);






