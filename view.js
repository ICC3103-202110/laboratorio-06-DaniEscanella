const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.cyanBright.bold(
        figlet.textSync(
            'Unit Convert App',
            {
                horizontalLayout: 'full',
                font: 'Big'
                
            }
        )
    )
}

function getTable (model) {
    const {leftValue} = model
    const {leftUnit} = model
    const {rightValue} = model
    const {rightUnit} = model
    return [{
        'Left Value' : leftValue,
        'Left Unit' : leftUnit,
        'Right Value' : rightValue,
        'Right Unit' : rightUnit
    }]
}

function view (model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}
function listFormSource (model){
    const {source} = model
    const message1 = 'Left temperature is the source?'  //yes/no
    return inquirer.prompt({
        name : 'source',
        type : 'input',
        message : message1,
        default : 'yes/no',
        validate: function(value){
            if(value === 'yes' || value === 'no'){
                return true
            } else {
                return 'Enter yes or no'
            }
        }
    })
    
}
function listFormL (model) {
    const {leftValue} = model
    const {leftUnit} = model
    const {rightUnit} = model
    const choices = ['Celsius','Fahrenheit','Kelvin']
    const message2 = 'Temperature value to convert?'
    const message3 = 'To?'
    const message4 = 'From?'
    return inquirer.prompt([{
        name: 'leftValue',
        type: 'number',
        message: message2,
        default: leftValue
    },{
        name: 'leftUnit',
        type: 'list',
        message: message3,
        default: leftUnit,
        choices: choices
    },{
        name: 'rightUnit',
        type: 'list',
        message: message4,
        default: rightValue,
        choices: choices
    }])  
}
function listFormR (model) {
    const {leftUnit} = model
    const {rightValue} = model
    const {rightUnit} = model
    const choices = ['Celsius','Fahrenheit','Kelvin']
    const message2 = 'Temperature value to convert?'
    const message3 = 'To?'
    const message4 = 'From?'
    return inquirer.prompt([{
        name: 'rightValue',
        type: 'number',
        message: message2,
        default: rightValue
    },{
        name: 'leftUnit',
        type: 'list',
        message: message3,
        default: leftUnit,
        choices: choices
    },{
        name: 'rightUnit',
        type: 'list',
        message: message4,
        default: rightValue,
        choices: choices
    }])  
}
module.exports = {
    view,
    listFormSource,
    listFormL,
    listFormR
}