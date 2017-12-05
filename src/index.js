import $ from 'jquery';
import 'babel-polyfill';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './stylesheet/main.scss';
import AppView from "./app";

const app = new AppView();
app.render();
$('body').append(app.el);
