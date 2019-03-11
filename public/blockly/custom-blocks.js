Blockly.Blocks['definir-cor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Body to:")
        .appendField(new Blockly.FieldDropdown([["Blue","B"], ["Yellow","Y"], ["Purple","R"]]), "lightcolor");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['definir-cor'] = function(block) {
  var dropdown_lightcolor = block.getFieldValue('lightcolor');
  // TODO: Assemble JavaScript into code variable.
  var code = "console.log('bloco SET_Color funcionando!');"
  if (dropdown_lightcolor === "B"){
    var code = "document.body.style.backgroundColor='steelblue';"
  }
  if (dropdown_lightcolor === "Y"){
    var code = "document.body.style.backgroundColor='goldenrod';"
  }
  if (dropdown_lightcolor === "R"){
    var code = "document.body.style.backgroundColor='blueviolet';"
  }

  // TODO: Assemble JavaScript into code variable.
  return code;
};

Blockly.Blocks['element_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Definir a cor de ")
        .appendField(new Blockly.FieldDropdown([["bola","ball"], ["quadrado","square"]]), "element")
        .appendField("para")
        .appendField(new Blockly.FieldDropdown([["vermelho","red"], ["verde","green"], ["azul","blue"]]), "color");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['element_color'] = function(block) {
  var dropdown_element = block.getFieldValue('element');
  var dropdown_color = block.getFieldValue('color');
  // TODO: Assemble JavaScript into code variable.


  var code = `mudarCor(${dropdown_element}, ${dropdown_color})`;

  console.log(code, 'this is code');


  // console.log(dropdown_element, "ELEM");

  // if(dropdown_element === "ball"){
  //   console.log(dropdown_element, "dropdown_element");
  //   if(dropdown_color === "R"){
  //     console.log("color = RED");
  //     var code = "document.getElementById('ball').style.backgroundColor='red"
  //   }
  //   if(dropdown_color === "B"){
  //     console.log("color = BLUE");
  //     var code = "document.getElementById('ball').style.backgroundColor='blue"
  //   }
  //   if(dropdown_color === "G"){
  //     console.log("Color = GREEN");
  //     var code = "document.getElementById('ball').style.backgroundColor='green"
  //   }
  // }

  return code;
};
