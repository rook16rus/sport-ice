import './build-in/lazyload';
import detectTouch from './build-in/detectTouch';
import setScrollbarWidth from './build-in/setScrollbarWidth';
import anchorLinks from './build-in/anchorLinks';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import validation from "./build-in/validation";
import masks from "./build-in/masks";
import editableTextContainer from './custom/editableTextContainer';
import initSliders from "./custom/initSliders";
import verticalScrollSlider from "./build-in/verticalScrollSlider";
import fixedBlock from "./build-in/fixedBlock";
import header from "./build-in/header";
import introSlider from "./build-in/introSlider";
import modelsSlider from "./build-in/modelsSlider";
import mapSlider from "./build-in/mapSlider";
import manufacturerSlider from "./build-in/manufacturerSlider";
import yandexMap from "./build-in/yandexMap";
import blocksReveal from "./build-in/blockReveal";
import features from "./build-in/features";
import gallerySlider from "./build-in/gallerySlider";
import fancybox from "./build-in/fancybox";
import modelCard from "./build-in/modelCard";
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {
    detectTouch();
    setScrollbarWidth();
    anchorLinks();
    verticalScrollSlider();
    fixedBlock();
    header();
    introSlider();
    modelsSlider();
    mapSlider();
    manufacturerSlider();
    yandexMap();
    blocksReveal();
    features();
    gallerySlider();
    validation();
    masks();
    fancybox();
    modelCard();

    // custom
    initSliders();
    editableTextContainer();
});

document.addEventListener('lazyloaded', () => {
    ScrollTrigger.refresh();
});

window.addEventListener('load', function () {
    document.body.classList.add('loaded');
    ScrollTrigger.refresh();
    setTimeout(() => document.body.classList.add('animatable'), 300);
});
