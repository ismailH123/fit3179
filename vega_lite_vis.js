var vg_1 = "charts/line_mvp_ppg_vs_leader.json";
var vg_2 = "charts/bar_coach_wins.json";
var vg_3 = "charts/pie_coach_championship.json";
var vg_4 = "charts/scatter_mvp_gp_mpg.json";
var australia_cc = "charts/choropleth_map_state_mvp.json"
var psm ="charts/porportinal_coty_teams.json"
var DPOTY_line = "charts/bubble_DPOTY_line.json"
var bar_dpoty ="charts/bar_dpoty_position.json"
var DPOTY_pie = "charts/pie_DPOTY_championship.json"
var map = "charts/dot_plot_map.json"


vegaEmbed("#line_chart", vg_1).then(function(result) {
}).catch(console.error);

vegaEmbed("#bar_chart_1", vg_2)
  .then(function(result) {
    console.log("Chart 2 loaded!");
  })
  .catch(console.error);

vegaEmbed("#pie_chart_1", vg_3)
  .then(function(result) {
    console.log("Championship pie chart loaded!");
  })
  .catch(console.error);

  vegaEmbed("#scatter_chart", vg_4)
  .then(function(result) {
    console.log("MVP scatter plot loaded!");
  })
  .catch(console.error);

vegaEmbed("#choropleth_chart", australia_cc)
  .then(function(result) {
    console.log("Australia choropleth map loaded!");
  })
  .catch(console.error);

vegaEmbed(
  "#proportional_symbol_map",psm)
  .then(function(result) {
    console.log("PSM LOaded")
  })
  .catch(console.error);

vegaEmbed("#bubble_chart", DPOTY_line)
  .then(function(result) {
    console.log("Chart 3 loaded!");
  })
  .catch(console.error);

vegaEmbed("#bar_chart_2", bar_dpoty)
  .then(function(result) {
    console.log("Chart 3 loaded!");
  })
  .catch(console.error);

vegaEmbed("#pie_chart_2", DPOTY_pie)
  .then(function(result) {
    console.log("Chart 3 loaded!");
  })
  .catch(console.error);

vegaEmbed("#dot_plot_map", map)
  .then(function(result) {
    console.log("Chart 3 loaded!");
  })
  .catch(console.error);