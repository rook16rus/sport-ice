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
import modelTabs from "./build-in/modelTabs";
import cardSlider from "./build-in/cardSlider";
import modelFeatures from "./build-in/modelFeatures";
import characteristicsSlider from "./build-in/characteristicsSlider";
import modals from "./build-in/modals";
import error from "./build-in/error"
import inputPlaceholder from "./build-in/inputPlaceholder";
import equipmentsList from "./build-in/equipmentsList";
import reviewsSlider from "./build-in/reviewsSlider";
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {
    cardSlider();
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
    reviewsSlider()
    validation();
    masks();
    fancybox();
    modelCard();
    modelTabs();
    modelFeatures();
    characteristicsSlider();
    modals();
    error();
    inputPlaceholder();
    equipmentsList();

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
