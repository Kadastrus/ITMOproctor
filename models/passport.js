/**
 * Модель паспортных данных
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Passport = new Schema({
    // Серия
    series: {
        type: Number,
        required: true
    },
    // Номер
    number: {
        type: Number,
        required: true
    },
    // Имя
    firstname: {
        type: String,
        required: true
    },
    // Фамилия
    lastname: {
        type: String,
        required: true
    },
    // Отчество
    middlename: {
        type: String,
        required: true
    },
    // Пол
    gender: {
        type: String,
        required: true
    },
    // День рождения
    birthday: {
        type: Date,
        required: true
    },
    // Гражданство
    citizenship: {
        type: String,
        required: true
    },
    // Место рождения
    birthplace: {
        type: String,
        required: true
    },
    // Кем выдан
    department: {
        type: String,
        required: true
    },
    // Дата выдачи
    issuedate: {
        type: String,
        required: true
    },
    departmentcode: {
        type: String,
        required: true
    },
    // Место регистрации
    registration: {
        type: String,
        required: true
    },
    // Дополнительно
    description: {
        type: String
    },
    // Копии страниц паспорта
    scan: {
        type: Schema.Types.ObjectId
    }
});
module.exports = mongoose.model('Passport', Passport);