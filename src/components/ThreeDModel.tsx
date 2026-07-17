"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface ThreeDModelProps {
  type:
    | "hero-composition"
    | "book"
    | "notebook"
    | "pen"
    | "graduation-cap"
    | "tablet"
    | "laptop"
    | "calendar"
    | "location-pin"
    | "message-bubble"
    | "lesson-card"
    | "teacher-badge"
    | "student-card"
    | "backpack"
    | "desk-lamp"
    | "coffee-cup"
    | "headphones";
  className?: string;
  scrollOffset?: number; // Optional customization for scroll parallax
}

// ----------------------------------------------------
// COLOR PALETTE (RAMIQ BRAND SPECIFICATION)
// ----------------------------------------------------
const COLORS = {
  teal: 0x0e766d,
  tealLight: 0x239d91,
  softGreen: 0xddf5f1,
  peach: 0xffd8c9,
  peachDark: 0xfca5a5,
  white: 0xf8fafc,
  cream: 0xfdfbfc,
  slate: 0x475569,
  charcoal: 0x1e293b,
  wood: 0xe2d4c9,
  pencilBody: 0xf59e0b,
  eraser: 0xf472b6,
  cupBody: 0x0f172a,
};

// ----------------------------------------------------
// PROCEDURAL GEOMETRY HELPER FUNCTIONS
// ----------------------------------------------------

// 2D Rounded Rectangle Shape
function createRoundedRectShape(w: number, h: number, r: number) {
  const shape = new THREE.Shape();
  shape.moveTo(-w / 2 + r, -h / 2);
  shape.lineTo(w / 2 - r, -h / 2);
  shape.quadraticCurveTo(w / 2, -h / 2, w / 2, -h / 2 + r);
  shape.lineTo(w / 2, h / 2 - r);
  shape.quadraticCurveTo(w / 2, h / 2, w / 2 - r, h / 2);
  shape.lineTo(-w / 2 + r, h / 2);
  shape.quadraticCurveTo(-w / 2, h / 2, -w / 2, h / 2 - r);
  shape.lineTo(-w / 2, -h / 2 + r);
  shape.quadraticCurveTo(-w / 2, -h / 2, -w / 2 + r, -h / 2);
  return shape;
}

// 2D Message Bubble Shape
function createMessageBubbleShape(w: number, h: number, r: number) {
  const shape = new THREE.Shape();
  shape.moveTo(-w / 2 + r, -h / 2);
  shape.lineTo(-w / 6, -h / 2);
  shape.lineTo(-w / 4, -h / 2 - h / 3);
  shape.lineTo(0, -h / 2);
  shape.lineTo(w / 2 - r, -h / 2);
  shape.quadraticCurveTo(w / 2, -h / 2, w / 2, -h / 2 + r);
  shape.lineTo(w / 2, h / 2 - r);
  shape.quadraticCurveTo(w / 2, h / 2, w / 2 - r, h / 2);
  shape.lineTo(-w / 2 + r, h / 2);
  shape.quadraticCurveTo(-w / 2, h / 2, -w / 2, h / 2 - r);
  shape.lineTo(-w / 2, -h / 2 + r);
  shape.quadraticCurveTo(-w / 2, -h / 2, -w / 2 + r, -h / 2);
  return shape;
}

// 2D Location Pin Shape
function createLocationPinShape(r: number) {
  const shape = new THREE.Shape();
  shape.moveTo(0, -r * 1.5);
  shape.bezierCurveTo(-r, -r * 0.7, -r, 0.2, -r, r);
  shape.arc(r, 0, r, Math.PI, 0, false);
  shape.bezierCurveTo(r, 0.2, r, -r * 0.7, 0, -r * 1.5);

  const hole = new THREE.Path();
  hole.absarc(0, r, r * 0.35, 0, Math.PI * 2, true);
  shape.holes.push(hole);
  return shape;
}

// 2D Shield / Badge Shape
function createShieldShape(w: number, h: number, r: number) {
  const shape = new THREE.Shape();
  shape.moveTo(-w / 2, h / 2 - r);
  shape.quadraticCurveTo(-w / 2, h / 2, -w / 2 + r, h / 2);
  shape.lineTo(w / 2 - r, h / 2);
  shape.quadraticCurveTo(w / 2, h / 2, w / 2, h / 2 - r);
  shape.lineTo(w / 2, 0);
  shape.quadraticCurveTo(w / 2, -h / 3, 0, -h / 2);
  shape.quadraticCurveTo(-w / 2, -h / 3, -w / 2, 0);
  shape.lineTo(-w / 2, h / 2 - r);
  return shape;
}

// Matte Material Factory
function createMatteMaterial(color: number, roughness = 0.9, shininess = 5) {
  return new THREE.MeshPhongMaterial({
    color,
    shininess,
    specular: 0x111111,
    flatShading: false,
  });
}

// ----------------------------------------------------
// 3D MODELS BUILDERS
// ----------------------------------------------------

function createPencil(): THREE.Group {
  const group = new THREE.Group();

  // Lead body (hexagonal)
  const bodyGeom = new THREE.CylinderGeometry(0.08, 0.08, 1.2, 6);
  const bodyMat = createMatteMaterial(COLORS.pencilBody);
  const body = new THREE.Mesh(bodyGeom, bodyMat);
  group.add(body);

  // Tip (cone)
  const tipGeom = new THREE.ConeGeometry(0.08, 0.25, 6);
  const tipMat = createMatteMaterial(COLORS.wood);
  const tip = new THREE.Mesh(tipGeom, tipMat);
  tip.position.y = 0.725; // 0.6 + 0.125
  group.add(tip);

  // Tip Lead (small cone at the very end)
  const leadGeom = new THREE.ConeGeometry(0.03, 0.09, 6);
  const leadMat = createMatteMaterial(COLORS.slate);
  const lead = new THREE.Mesh(leadGeom, leadMat);
  lead.position.y = 0.825;
  group.add(lead);

  // Metal connector
  const ringGeom = new THREE.CylinderGeometry(0.08, 0.08, 0.1, 8);
  const ringMat = createMatteMaterial(COLORS.slate);
  const ring = new THREE.Mesh(ringGeom, ringMat);
  ring.position.y = -0.65;
  group.add(ring);

  // Eraser
  const eraserGeom = new THREE.CylinderGeometry(0.08, 0.08, 0.15, 8);
  const eraserMat = createMatteMaterial(COLORS.eraser);
  const eraser = new THREE.Mesh(eraserGeom, eraserMat);
  eraser.position.y = -0.775;
  group.add(eraser);

  // Rotate pencil nicely for presentations
  group.rotation.z = Math.PI / 4;
  group.rotation.x = Math.PI / 8;

  return group;
}

function createCoffeeCup(): THREE.Group {
  const group = new THREE.Group();

  // Cup body
  const bodyGeom = new THREE.CylinderGeometry(0.28, 0.22, 0.6, 16);
  const bodyMat = createMatteMaterial(COLORS.cupBody);
  const body = new THREE.Mesh(bodyGeom, bodyMat);
  group.add(body);

  // Cup liquid
  const liqGeom = new THREE.CylinderGeometry(0.25, 0.25, 0.02, 16);
  const liqMat = createMatteMaterial(0x5c4033); // coffee brown
  const liquid = new THREE.Mesh(liqGeom, liqMat);
  liquid.position.y = 0.28;
  group.add(liquid);

  // Cup handle
  const handleGeom = new THREE.TorusGeometry(0.18, 0.04, 8, 16, Math.PI);
  const handleMat = createMatteMaterial(COLORS.cupBody);
  const handle = new THREE.Mesh(handleGeom, handleMat);
  handle.position.x = -0.24;
  handle.rotation.z = Math.PI / 2;
  group.add(handle);

  return group;
}

function createBook(): THREE.Group {
  const group = new THREE.Group();

  const coverW = 1.0;
  const coverH = 1.4;
  const thickness = 0.03;
  const tilt = 0.25; // Book opening tilt angle

  // Spine
  const spineGeom = new THREE.CylinderGeometry(0.04, 0.04, coverH, 8, 1, false, -Math.PI / 2, Math.PI);
  const spineMat = createMatteMaterial(COLORS.teal);
  const spine = new THREE.Mesh(spineGeom, spineMat);
  spine.rotation.x = Math.PI / 2;
  group.add(spine);

  // Covers (Left & Right)
  const coverGeom = new THREE.BoxGeometry(coverW, coverH, thickness);
  const coverMat = createMatteMaterial(COLORS.teal);

  const leftCover = new THREE.Mesh(coverGeom, coverMat);
  leftCover.position.x = -coverW / 2;
  leftCover.position.y = 0;
  leftCover.position.z = Math.sin(tilt) * (coverW / 2);
  leftCover.rotation.y = tilt;
  group.add(leftCover);

  const rightCover = new THREE.Mesh(coverGeom, coverMat);
  rightCover.position.x = coverW / 2;
  rightCover.position.y = 0;
  rightCover.position.z = Math.sin(tilt) * (coverW / 2);
  rightCover.rotation.y = -tilt;
  group.add(rightCover);

  // Pages (Left & Right stacked sheets)
  const pageGeom = new THREE.BoxGeometry(coverW - 0.06, coverH - 0.06, thickness * 1.5);
  const pageMat = createMatteMaterial(COLORS.cream);

  const leftPage = new THREE.Mesh(pageGeom, pageMat);
  leftPage.position.x = -(coverW - 0.06) / 2 - 0.02;
  leftPage.position.y = 0;
  leftPage.position.z = Math.sin(tilt) * ((coverW - 0.06) / 2) + 0.03;
  leftPage.rotation.y = tilt * 0.95;
  group.add(leftPage);

  const rightPage = new THREE.Mesh(pageGeom, pageMat);
  rightPage.position.x = (coverW - 0.06) / 2 + 0.02;
  rightPage.position.y = 0;
  rightPage.position.z = Math.sin(tilt) * ((coverW - 0.06) / 2) + 0.03;
  rightPage.rotation.y = -tilt * 0.95;
  group.add(rightPage);

  // Scale and position
  group.scale.set(0.9, 0.9, 0.9);
  group.rotation.x = Math.PI / 5;
  group.rotation.y = -Math.PI / 12;

  return group;
}

function createNotebook(): THREE.Group {
  const group = new THREE.Group();

  const w = 1.3;
  const h = 1.7;
  const thickness = 0.05;

  // Cover (Peach)
  const coverShape = createRoundedRectShape(w, h, 0.1);
  const coverGeom = new THREE.ExtrudeGeometry(coverShape, {
    depth: thickness,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 1,
    bevelSize: 0.02,
    bevelThickness: 0.02,
  });
  const coverMat = createMatteMaterial(COLORS.peach);
  const cover = new THREE.Mesh(coverGeom, coverMat);
  cover.position.z = -thickness;
  group.add(cover);

  // Pages (White)
  const pageShape = createRoundedRectShape(w - 0.06, h - 0.06, 0.08);
  const pageGeom = new THREE.ExtrudeGeometry(pageShape, {
    depth: thickness * 0.8,
    bevelEnabled: false,
  });
  const pageMat = createMatteMaterial(COLORS.white);
  const pages = new THREE.Mesh(pageGeom, pageMat);
  pages.position.z = 0.01;
  group.add(pages);

  // Spiral Binder Rings
  const numRings = 10;
  const ringStep = (h - 0.2) / (numRings - 1);
  const ringGeom = new THREE.TorusGeometry(0.06, 0.015, 6, 12, Math.PI * 1.5);
  const ringMat = createMatteMaterial(COLORS.slate);

  for (let i = 0; i < numRings; i++) {
    const ring = new THREE.Mesh(ringGeom, ringMat);
    ring.position.x = -w / 2;
    ring.position.y = -h / 2 + 0.1 + i * ringStep;
    ring.position.z = thickness / 2;
    ring.rotation.x = Math.PI / 2;
    ring.rotation.y = -Math.PI / 4;
    group.add(ring);
  }

  group.rotation.x = Math.PI / 6;
  group.rotation.y = Math.PI / 12;

  return group;
}

function createLessonCard(): THREE.Group {
  const group = new THREE.Group();

  const w = 1.6;
  const h = 1.0;

  // Main Card Base (White)
  const cardShape = createRoundedRectShape(w, h, 0.08);
  const cardGeom = new THREE.ExtrudeGeometry(cardShape, {
    depth: 0.04,
    bevelEnabled: true,
    bevelSegments: 2,
    bevelSize: 0.01,
    bevelThickness: 0.01,
  });
  const cardMat = createMatteMaterial(COLORS.white);
  const base = new THREE.Mesh(cardGeom, cardMat);
  group.add(base);

  // Header Badge on Card (Teal)
  const badgeShape = createRoundedRectShape(w * 0.35, 0.18, 0.04);
  const badgeGeom = new THREE.ExtrudeGeometry(badgeShape, { depth: 0.01 });
  const badgeMat = createMatteMaterial(COLORS.teal);
  const headerBadge = new THREE.Mesh(badgeGeom, badgeMat);
  headerBadge.position.set(-w * 0.25, h * 0.3, 0.05);
  group.add(headerBadge);

  // Graphic Element / Circle placeholder
  const circleGeom = new THREE.CylinderGeometry(0.12, 0.12, 0.01, 16);
  const circleMat = createMatteMaterial(COLORS.softGreen);
  const avatar = new THREE.Mesh(circleGeom, circleMat);
  avatar.rotation.x = Math.PI / 2;
  avatar.position.set(-w * 0.28, -h * 0.1, 0.05);
  group.add(avatar);

  // Card Content Lines (Peach / Slate)
  const lineMat = createMatteMaterial(COLORS.slate);
  const lineAccentMat = createMatteMaterial(COLORS.peach);

  const linesConfig = [
    { y: 0.3, w: w * 0.3, mat: lineAccentMat },
    { y: 0.1, w: w * 0.45, mat: lineMat },
    { y: -0.1, w: w * 0.45, mat: lineMat },
    { y: -0.3, w: w * 0.35, mat: lineMat },
  ];

  linesConfig.forEach((cfg) => {
    const lineShape = createRoundedRectShape(cfg.w, 0.04, 0.01);
    const lineGeom = new THREE.ExtrudeGeometry(lineShape, { depth: 0.01 });
    const line = new THREE.Mesh(lineGeom, cfg.mat);
    line.position.set(w * 0.15, cfg.y, 0.05);
    group.add(line);
  });

  group.rotation.x = -Math.PI / 8;
  group.rotation.y = -Math.PI / 8;

  return group;
}

function createLaptop(): THREE.Group {
  const group = new THREE.Group();

  const w = 2.0;
  const d = 1.35;
  const thickness = 0.04;

  // Base (Keyboard side - Slate)
  const baseShape = createRoundedRectShape(w, d, 0.08);
  const baseGeom = new THREE.ExtrudeGeometry(baseShape, {
    depth: thickness,
    bevelEnabled: true,
    bevelSegments: 2,
    bevelSize: 0.01,
    bevelThickness: 0.01,
  });
  const baseMat = createMatteMaterial(COLORS.slate);
  const base = new THREE.Mesh(baseGeom, baseMat);
  base.rotation.x = Math.PI / 2; // Lie flat
  group.add(base);

  // Screen (Teal Cover, White Display)
  const screenGroup = new THREE.Group();
  screenGroup.position.set(0, thickness, -d / 2);

  // Cover back
  const screenShape = createRoundedRectShape(w, d, 0.08);
  const screenCoverGeom = new THREE.ExtrudeGeometry(screenShape, {
    depth: thickness * 0.7,
    bevelEnabled: true,
    bevelSegments: 2,
    bevelSize: 0.01,
    bevelThickness: 0.01,
  });
  const screenCoverMat = createMatteMaterial(COLORS.teal);
  const screenCover = new THREE.Mesh(screenCoverGeom, screenCoverMat);
  screenCover.position.set(0, d / 2, -thickness * 0.7);
  screenGroup.add(screenCover);

  // Inner display screen (White)
  const innerDisplayGeom = new THREE.BoxGeometry(w - 0.12, d - 0.12, 0.01);
  const innerDisplayMat = createMatteMaterial(COLORS.white);
  const innerDisplay = new THREE.Mesh(innerDisplayGeom, innerDisplayMat);
  innerDisplay.position.set(0, d / 2, 0.005);
  screenGroup.add(innerDisplay);

  // Inner screen graphic (a decorative soft green dashboard card)
  const innerArtGeom = new THREE.BoxGeometry(w * 0.4, d * 0.4, 0.012);
  const innerArtMat = createMatteMaterial(COLORS.softGreen);
  const innerArt = new THREE.Mesh(innerArtGeom, innerArtMat);
  innerArt.position.set(-w * 0.2, d * 0.5, 0.01);
  screenGroup.add(innerArt);

  // Tilt screen back
  screenGroup.rotation.x = -Math.PI / 5; // 110 degrees open
  group.add(screenGroup);

  // Trackpad (small outline on keyboard base)
  const padShape = createRoundedRectShape(0.45, 0.28, 0.02);
  const padGeom = new THREE.ExtrudeGeometry(padShape, { depth: 0.005 });
  const padMat = createMatteMaterial(COLORS.charcoal);
  const trackpad = new THREE.Mesh(padGeom, padMat);
  trackpad.rotation.x = Math.PI / 2;
  trackpad.position.set(0, thickness + 0.005, d * 0.35);
  group.add(trackpad);

  // Position adjusting
  group.scale.set(0.95, 0.95, 0.95);
  group.rotation.x = Math.PI / 8;
  group.rotation.y = -Math.PI / 6;

  return group;
}

function createCalendar(): THREE.Group {
  const group = new THREE.Group();

  const w = 1.3;
  const h = 1.1;

  // Triangular Stand (Teal)
  const standShape = new THREE.Shape();
  standShape.moveTo(-w / 2, 0);
  standShape.lineTo(w / 2, 0);
  standShape.lineTo(w / 2.2, -0.6);
  standShape.lineTo(-w / 2.2, -0.6);
  standShape.lineTo(-w / 2, 0);

  const standGeom = new THREE.ExtrudeGeometry(standShape, {
    depth: 0.08,
    bevelEnabled: true,
    bevelSegments: 2,
    bevelSize: 0.015,
  });
  const standMat = createMatteMaterial(COLORS.teal);
  const stand = new THREE.Mesh(standGeom, standMat);
  stand.position.set(0, -0.2, -0.04);
  group.add(stand);

  // Calendar Pages Backing (White)
  const pageShape = createRoundedRectShape(w * 0.85, h * 0.85, 0.05);
  const pageGeom = new THREE.ExtrudeGeometry(pageShape, {
    depth: 0.04,
    bevelEnabled: false,
  });
  const pageMat = createMatteMaterial(COLORS.white);
  const backing = new THREE.Mesh(pageGeom, pageMat);
  backing.position.z = 0.02;
  group.add(backing);

  // Calendar Page Front (Peach - representing a calendar month layout grid)
  const gridGeom = new THREE.BoxGeometry(w * 0.72, h * 0.72, 0.01);
  const gridMat = createMatteMaterial(COLORS.peach);
  const grid = new THREE.Mesh(gridGeom, gridMat);
  grid.position.set(0, -0.05, 0.065);
  group.add(grid);

  // Binding rings
  const ringGeom = new THREE.TorusGeometry(0.08, 0.018, 4, 12);
  const ringMat = createMatteMaterial(COLORS.slate);
  for (let i = -1; i <= 1; i++) {
    const ring = new THREE.Mesh(ringGeom, ringMat);
    ring.position.set(i * 0.35, h * 0.4, 0.04);
    ring.rotation.y = Math.PI / 2;
    group.add(ring);
  }

  group.rotation.x = Math.PI / 6;
  group.rotation.y = -Math.PI / 12;

  return group;
}

function createGraduationCap(): THREE.Group {
  const group = new THREE.Group();

  // Underneath cap cylinder
  const baseGeom = new THREE.CylinderGeometry(0.35, 0.38, 0.3, 16);
  const baseMat = createMatteMaterial(COLORS.charcoal);
  const base = new THREE.Mesh(baseGeom, baseMat);
  base.position.y = -0.15;
  group.add(base);

  // Flat square mortarboard plate (rotated 45 deg)
  const plateShape = createRoundedRectShape(1.4, 1.4, 0.04);
  const plateGeom = new THREE.ExtrudeGeometry(plateShape, {
    depth: 0.04,
    bevelEnabled: true,
    bevelSegments: 2,
    bevelSize: 0.01,
  });
  const plateMat = createMatteMaterial(COLORS.charcoal);
  const plate = new THREE.Mesh(plateGeom, plateMat);
  plate.rotation.x = Math.PI / 2;
  group.add(plate);

  // Tassel button (small cylinder in center)
  const buttonGeom = new THREE.CylinderGeometry(0.05, 0.05, 0.04, 8);
  const buttonMat = createMatteMaterial(COLORS.teal);
  const button = new THREE.Mesh(buttonGeom, buttonMat);
  button.position.y = 0.04;
  group.add(button);

  // Tassel string (Peach)
  const stringGeom = new THREE.CylinderGeometry(0.01, 0.01, 0.55, 6);
  const stringMat = createMatteMaterial(COLORS.peach);
  const string = new THREE.Mesh(stringGeom, stringMat);
  string.rotation.z = Math.PI / 2.3;
  string.position.set(0.24, 0.02, 0.24);
  group.add(string);

  // Hanging tassel brush
  const tasselGeom = new THREE.ConeGeometry(0.04, 0.16, 6);
  const tasselMat = createMatteMaterial(COLORS.peach);
  const tassel = new THREE.Mesh(tasselGeom, tasselMat);
  tassel.position.set(0.48, -0.06, 0.48);
  group.add(tassel);

  group.rotation.x = Math.PI / 6;
  group.rotation.y = -Math.PI / 4;

  return group;
}

function createLocationPin(): THREE.Group {
  const group = new THREE.Group();

  const pinShape = createLocationPinShape(0.45);
  const pinGeom = new THREE.ExtrudeGeometry(pinShape, {
    depth: 0.16,
    bevelEnabled: true,
    bevelSegments: 3,
    bevelSize: 0.02,
    bevelThickness: 0.02,
  });

  const pinMat = createMatteMaterial(COLORS.teal);
  const mesh = new THREE.Mesh(pinGeom, pinMat);

  // Center alignment and tilt
  mesh.position.set(0, -0.4, -0.08);
  group.add(mesh);

  group.rotation.x = Math.PI / 6;
  group.rotation.y = Math.PI / 6;

  return group;
}

// Message Bubble
function createMessageBubble(): THREE.Group {
  const group = new THREE.Group();

  const bubbleShape = createMessageBubbleShape(1.4, 1.1, 0.12);
  const bubbleGeom = new THREE.ExtrudeGeometry(bubbleShape, {
    depth: 0.08,
    bevelEnabled: true,
    bevelSegments: 2,
    bevelSize: 0.015,
    bevelThickness: 0.015,
  });

  const bubbleMat = createMatteMaterial(COLORS.peach);
  const mesh = new THREE.Mesh(bubbleGeom, bubbleMat);

  // Center alignment
  mesh.position.set(0, 0, -0.04);
  group.add(mesh);

  // Inner decorative text lines (White/Teal)
  const line1Shape = createRoundedRectShape(0.7, 0.06, 0.015);
  const line1Geom = new THREE.ExtrudeGeometry(line1Shape, { depth: 0.01 });
  const line1Mat = createMatteMaterial(COLORS.white);
  const line1 = new THREE.Mesh(line1Geom, line1Mat);
  line1.position.set(-0.15, 0.15, 0.06);
  group.add(line1);

  const line2Shape = createRoundedRectShape(0.9, 0.06, 0.015);
  const line2Geom = new THREE.ExtrudeGeometry(line2Shape, { depth: 0.01 });
  const line2 = new THREE.Mesh(line2Geom, line1Mat);
  line2.position.set(-0.05, -0.08, 0.06);
  group.add(line2);

  group.rotation.x = -Math.PI / 8;
  group.rotation.y = -Math.PI / 8;

  return group;
}

function createTeacherBadge(): THREE.Group {
  const group = new THREE.Group();

  const w = 1.1;
  const h = 1.3;

  // Badge Shield (Teal)
  const shieldShape = createShieldShape(w, h, 0.1);
  const shieldGeom = new THREE.ExtrudeGeometry(shieldShape, {
    depth: 0.08,
    bevelEnabled: true,
    bevelSegments: 3,
    bevelSize: 0.02,
    bevelThickness: 0.02,
  });
  const shieldMat = createMatteMaterial(COLORS.teal);
  const shield = new THREE.Mesh(shieldGeom, shieldMat);
  shield.position.z = -0.04;
  group.add(shield);

  // Inner Star (Peach)
  const starShape = new THREE.Shape();
  const starPoints = 5;
  const outerR = 0.22;
  const innerR = 0.09;

  for (let i = 0; i < starPoints * 2; i++) {
    const angle = (i * Math.PI) / starPoints - Math.PI / 2;
    const r = i % 2 === 0 ? outerR : innerR;
    const x = Math.cos(angle) * r;
    const y = Math.sin(angle) * r;
    if (i === 0) starShape.moveTo(x, y);
    else starShape.lineTo(x, y);
  }
  starShape.closePath();

  const starGeom = new THREE.ExtrudeGeometry(starShape, {
    depth: 0.04,
    bevelEnabled: true,
    bevelSegments: 1,
    bevelSize: 0.005,
  });
  const starMat = createMatteMaterial(COLORS.peach);
  const star = new THREE.Mesh(starGeom, starMat);
  star.position.set(0, 0.1, 0.06);
  group.add(star);

  // Small lines beneath star (White)
  const accentShape = createRoundedRectShape(0.48, 0.04, 0.01);
  const accentGeom = new THREE.ExtrudeGeometry(accentShape, { depth: 0.02 });
  const accentMat = createMatteMaterial(COLORS.white);
  const accent = new THREE.Mesh(accentGeom, accentMat);
  accent.position.set(0, -0.22, 0.06);
  group.add(accent);

  group.rotation.x = Math.PI / 8;
  group.rotation.y = -Math.PI / 12;

  return group;
}

function createStudentCard(): THREE.Group {
  const group = new THREE.Group();

  const w = 1.2;
  const h = 1.5;

  // Card Base (White)
  const cardShape = createRoundedRectShape(w, h, 0.08);
  const cardGeom = new THREE.ExtrudeGeometry(cardShape, {
    depth: 0.04,
    bevelEnabled: true,
    bevelSegments: 2,
    bevelSize: 0.01,
  });
  const cardMat = createMatteMaterial(COLORS.white);
  const base = new THREE.Mesh(cardGeom, cardMat);
  base.position.z = -0.02;
  group.add(base);

  // Student Profile Sphere Head (Peach)
  const headGeom = new THREE.SphereGeometry(0.18, 16, 16);
  const headMat = createMatteMaterial(COLORS.peach);
  const head = new THREE.Mesh(headGeom, headMat);
  head.position.set(0, 0.35, 0.06);
  group.add(head);

  // Student Profile Shoulder Cup (Peach)
  const shoulderGeom = new THREE.CylinderGeometry(0.24, 0.28, 0.2, 16, 1, false, 0, Math.PI);
  const shoulderMat = createMatteMaterial(COLORS.peach);
  const shoulders = new THREE.Mesh(shoulderGeom, shoulderMat);
  shoulders.rotation.x = Math.PI / 2;
  shoulders.position.set(0, 0.05, 0.06);
  group.add(shoulders);

  // Text representation lines (Teal & Slate)
  const textMat = createMatteMaterial(COLORS.slate);
  const textAccentMat = createMatteMaterial(COLORS.teal);

  const lines = [
    { y: -0.22, w: 0.65, mat: textAccentMat },
    { y: -0.38, w: 0.75, mat: textMat },
    { y: -0.52, w: 0.5, mat: textMat },
  ];

  lines.forEach((l) => {
    const lineShape = createRoundedRectShape(l.w, 0.045, 0.01);
    const lineGeom = new THREE.ExtrudeGeometry(lineShape, { depth: 0.01 });
    const line = new THREE.Mesh(lineGeom, l.mat);
    line.position.set(0, l.y, 0.045);
    group.add(line);
  });

  group.rotation.x = Math.PI / 8;
  group.rotation.y = Math.PI / 8;

  return group;
}

function createBackpack(): THREE.Group {
  const group = new THREE.Group();

  const w = 1.0;
  const h = 1.3;
  const d = 0.5;

  // Main Bag volume (Teal)
  const mainShape = createRoundedRectShape(w, h, 0.25);
  const mainGeom = new THREE.ExtrudeGeometry(mainShape, {
    depth: d,
    bevelEnabled: true,
    bevelSegments: 3,
    bevelSize: 0.04,
    bevelThickness: 0.04,
  });
  const mainMat = createMatteMaterial(COLORS.teal);
  const main = new THREE.Mesh(mainGeom, mainMat);
  main.position.z = -d / 2;
  group.add(main);

  // Front Pocket (Peach)
  const pocketShape = createRoundedRectShape(w * 0.78, h * 0.45, 0.1);
  const pocketGeom = new THREE.ExtrudeGeometry(pocketShape, {
    depth: d * 0.45,
    bevelEnabled: true,
    bevelSegments: 2,
    bevelSize: 0.02,
    bevelThickness: 0.02,
  });
  const pocketMat = createMatteMaterial(COLORS.peach);
  const pocket = new THREE.Mesh(pocketGeom, pocketMat);
  pocket.position.set(0, -h * 0.22, d / 2 - 0.02);
  group.add(pocket);

  // Shoulder Strap loop 1 (Behind main - Slate)
  const strapGeom = new THREE.TorusGeometry(0.38, 0.035, 4, 12, Math.PI);
  const strapMat = createMatteMaterial(COLORS.slate);

  const strapLeft = new THREE.Mesh(strapGeom, strapMat);
  strapLeft.position.set(-w * 0.25, h * 0.1, -d / 2 - 0.06);
  strapLeft.rotation.y = Math.PI / 1.8;
  group.add(strapLeft);

  const strapRight = new THREE.Mesh(strapGeom, strapMat);
  strapRight.position.set(w * 0.25, h * 0.1, -d / 2 - 0.06);
  strapRight.rotation.y = Math.PI / 2.25;
  group.add(strapRight);

  group.rotation.x = Math.PI / 6;
  group.rotation.y = -Math.PI / 6;

  return group;
}

function createHeadphones(): THREE.Group {
  const group = new THREE.Group();

  // Headband (Half Torus - Slate)
  const bandGeom = new THREE.TorusGeometry(0.6, 0.045, 6, 24, Math.PI);
  const bandMat = createMatteMaterial(COLORS.slate);
  const band = new THREE.Mesh(bandGeom, bandMat);
  band.position.y = 0.1;
  group.add(band);

  // Ear Cups (Left & Right - Peach/Teal)
  const cupGeom = new THREE.CylinderGeometry(0.24, 0.24, 0.16, 16);
  const cushionGeom = new THREE.CylinderGeometry(0.25, 0.25, 0.08, 16);

  const cupMat = createMatteMaterial(COLORS.teal);
  const cushionMat = createMatteMaterial(COLORS.peach);

  // Left side cup
  const leftCupGroup = new THREE.Group();
  leftCupGroup.position.set(-0.6, 0.08, 0);
  leftCupGroup.rotation.z = Math.PI / 2;

  const leftCup = new THREE.Mesh(cupGeom, cupMat);
  const leftCushion = new THREE.Mesh(cushionGeom, cushionMat);
  leftCushion.position.y = 0.08;
  leftCupGroup.add(leftCup, leftCushion);
  group.add(leftCupGroup);

  // Right side cup
  const rightCupGroup = new THREE.Group();
  rightCupGroup.position.set(0.6, 0.08, 0);
  rightCupGroup.rotation.z = -Math.PI / 2;

  const rightCup = new THREE.Mesh(cupGeom, cupMat);
  const rightCushion = new THREE.Mesh(cushionGeom, cushionMat);
  rightCushion.position.y = 0.08;
  rightCupGroup.add(rightCup, rightCushion);
  group.add(rightCupGroup);

  group.rotation.x = Math.PI / 6;
  group.rotation.y = -Math.PI / 12;

  return group;
}

function createDeskLamp(): THREE.Group {
  const group = new THREE.Group();

  // Base
  const baseGeom = new THREE.CylinderGeometry(0.3, 0.3, 0.04, 16);
  const baseMat = createMatteMaterial(COLORS.slate);
  const base = new THREE.Mesh(baseGeom, baseMat);
  base.position.y = -0.6;
  group.add(base);

  // Lower arm (angled rod)
  const rodGeom = new THREE.CylinderGeometry(0.03, 0.03, 0.5, 8);
  const rodMat = createMatteMaterial(COLORS.slate);

  const lowerArm = new THREE.Mesh(rodGeom, rodMat);
  lowerArm.position.set(0.12, -0.38, 0);
  lowerArm.rotation.z = -Math.PI / 8;
  group.add(lowerArm);

  // Middle knuckle joint
  const jointGeom = new THREE.SphereGeometry(0.06, 8, 8);
  const jointMat = createMatteMaterial(COLORS.peach);
  const joint = new THREE.Mesh(jointGeom, jointMat);
  joint.position.set(0.24, -0.16, 0);
  group.add(joint);

  // Upper arm (rod tilted other way)
  const upperArm = new THREE.Mesh(rodGeom, rodMat);
  upperArm.position.set(0.12, 0.06, 0);
  upperArm.rotation.z = Math.PI / 6;
  group.add(upperArm);

  // Lamp Dome shade (Teal)
  const shadeGeom = new THREE.CylinderGeometry(0.12, 0.28, 0.28, 16, 1, true); // Hollow shade
  const shadeMat = createMatteMaterial(COLORS.teal);
  const shade = new THREE.Mesh(shadeGeom, shadeMat);
  shade.position.set(-0.06, 0.24, 0);
  shade.rotation.z = -Math.PI / 4;
  group.add(shade);

  // Inner bulb light emitter sphere
  const bulbGeom = new THREE.SphereGeometry(0.09, 8, 8);
  const bulbMat = createMatteMaterial(COLORS.peach, 0.1, 100); // Glowing style
  const bulb = new THREE.Mesh(bulbGeom, bulbMat);
  bulb.position.set(-0.09, 0.21, 0);
  group.add(bulb);

  return group;
}

// ----------------------------------------------------
// THE HERO COMPOSITION
// Arranges multiple objects naturally on a clean layout
// ----------------------------------------------------
function createHeroComposition(): THREE.Group {
  const group = new THREE.Group();

  // Main Platform (Desk representation - Soft Beige)
  const deskGeom = new THREE.BoxGeometry(5.0, 0.12, 3.4);
  const deskMat = createMatteMaterial(COLORS.cream, 0.9, 0);
  const desk = new THREE.Mesh(deskGeom, deskMat);
  desk.position.y = -0.9;
  group.add(desk);

  // 1. Laptop (Centered back)
  const laptop = createLaptop();
  laptop.scale.set(0.9, 0.9, 0.9);
  laptop.rotation.set(0, -Math.PI / 6, 0);
  laptop.position.set(0.4, -0.84, -0.3);
  group.add(laptop);

  // 2. Open Book (Front left)
  const book = createBook();
  book.scale.set(0.65, 0.65, 0.65);
  book.rotation.set(-Math.PI / 12, Math.PI / 4, Math.PI / 12);
  book.position.set(-1.4, -0.8, 0.4);
  group.add(book);

  // 3. Coffee Cup (Front right)
  const coffeeCup = createCoffeeCup();
  coffeeCup.scale.set(0.9, 0.9, 0.9);
  coffeeCup.position.set(1.4, -0.58, 0.7);
  group.add(coffeeCup);

  // 4. Pencil (Lying beside book)
  const pencil = createPencil();
  pencil.scale.set(0.9, 0.9, 0.9);
  pencil.rotation.set(Math.PI / 2, 0, Math.PI / 3);
  pencil.position.set(-0.5, -0.82, 0.8);
  group.add(pencil);

  // 5. Desk Lamp (Back left, casting glow onto laptop)
  const lamp = createDeskLamp();
  lamp.scale.set(0.95, 0.95, 0.95);
  lamp.rotation.y = Math.PI / 3;
  lamp.position.set(-1.8, -0.3, -0.8);
  group.add(lamp);

  // Composition scale and angle adjustments
  group.scale.set(0.92, 0.92, 0.92);
  group.rotation.x = Math.PI / 15;
  group.rotation.y = -Math.PI / 18;

  return group;
}

// ----------------------------------------------------
// MAIN REACT EXPORT COMPONENT
// ----------------------------------------------------
export default function ThreeDModel({ type, className = "", scrollOffset = 0 }: ThreeDModelProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Track component visibility to pause rendering when offscreen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    if (mountRef.current) {
      observer.observe(mountRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || !mountRef.current) return;

    const currentMount = mountRef.current;
    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;

    // 1. SCENE SETUP
    const scene = new THREE.Scene();

    // 2. CAMERA SETUP
    const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100);
    // Position camera dynamically based on model scope
    if (type === "hero-composition") {
      camera.position.set(0, 1.2, 7.5);
    } else {
      camera.position.set(0, 0, 4.2);
    }
    camera.lookAt(0, 0, 0);

    // 3. RENDERER SETUP
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Cap pixel ratio at 2 for performance
    renderer.shadowMap.enabled = false; // Soft ambient/matte lighting without heavy shadowmaps
    currentMount.appendChild(renderer.domElement);

    // 4. LIGHTING SYSTEM (Unified direction & soft natural color)
    const ambientLight = new THREE.AmbientLight(COLORS.softGreen, 0.85);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.25);
    dirLight.position.set(6, 12, 6);
    scene.add(dirLight);

    // Weak secondary light for fill
    const fillLight = new THREE.DirectionalLight(COLORS.peach, 0.35);
    fillLight.position.set(-6, -2, 4);
    scene.add(fillLight);

    // 5. INJECT MODEL GEOMETRY
    let activeModel: THREE.Group;

    switch (type) {
      case "hero-composition":
        activeModel = createHeroComposition();
        break;
      case "book":
        activeModel = createBook();
        break;
      case "notebook":
        activeModel = createNotebook();
        break;
      case "pen":
        activeModel = createPencil();
        break;
      case "graduation-cap":
        activeModel = createGraduationCap();
        break;
      case "tablet":
        // Tablets are clean and minimal
        const tab = new THREE.Group();
        const tabFrame = createRoundedRectShape(1.7, 1.15, 0.08);
        const tabBase = new THREE.Mesh(
          new THREE.ExtrudeGeometry(tabFrame, { depth: 0.05, bevelEnabled: true, bevelSize: 0.01 }),
          createMatteMaterial(COLORS.slate)
        );
        const tabSc = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.98, 0.01), createMatteMaterial(COLORS.white));
        tabSc.position.z = 0.03;
        tab.add(tabBase, tabSc);
        tab.rotation.set(Math.PI / 6, Math.PI / 12, 0);
        activeModel = tab;
        break;
      case "laptop":
        activeModel = createLaptop();
        break;
      case "calendar":
        activeModel = createCalendar();
        break;
      case "location-pin":
        activeModel = createLocationPin();
        break;
      case "message-bubble":
        activeModel = createMessageBubble();
        break;
      case "lesson-card":
        activeModel = createLessonCard();
        break;
      case "teacher-badge":
        activeModel = createTeacherBadge();
        break;
      case "student-card":
        activeModel = createStudentCard();
        break;
      case "backpack":
        activeModel = createBackpack();
        break;
      case "desk-lamp":
        activeModel = createDeskLamp();
        break;
      case "coffee-cup":
        activeModel = createCoffeeCup();
        break;
      case "headphones":
        activeModel = createHeadphones();
        break;
      default:
        activeModel = new THREE.Group();
    }

    scene.add(activeModel);

    // Initial base rotations to track
    const baseRotationX = activeModel.rotation.x;
    const baseRotationY = activeModel.rotation.y;

    // 6. SCROLL & ANIMATION LOOP
    let animationFrameId: number;
    let localScrollY = 0;

    const handleScroll = () => {
      localScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Tick function
    const tick = () => {
      if (!isVisible) return;

      // Subtle base automatic rotation (slow floating)
      const elapsed = Date.now() * 0.0006;
      
      // Calculate scroll parallax contribution
      const scrollRatio = Math.min(localScrollY / 5000, 1) + scrollOffset;
      const rotationParallaxX = scrollRatio * 0.45;
      const rotationParallaxY = scrollRatio * 0.6;
      
      // Soft bobbing height offset
      const bobbing = Math.sin(elapsed) * 0.08;

      if (type === "hero-composition") {
        // Hero composition moves very slowly and does not tilt extremely
        activeModel.rotation.y = baseRotationY + Math.sin(elapsed * 0.3) * 0.04 + rotationParallaxY * 0.15;
        activeModel.position.y = bobbing * 0.5;
      } else {
        // Individual elements float, rotate, and react to scroll parallax
        activeModel.rotation.y = baseRotationY + elapsed * 0.15 + rotationParallaxY * 0.35;
        activeModel.rotation.x = baseRotationX + Math.cos(elapsed * 0.2) * 0.05 + rotationParallaxX * 0.15;
        activeModel.position.y = bobbing;
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(tick);
    };

    // Begin looping
    tick();

    // 7. RESPONSIVE RESIZE OBSERVER
    const resizeObserver = new ResizeObserver((entries) => {
      if (!entries || entries.length === 0) return;
      const entry = entries[0];
      const newW = entry.contentRect.width;
      const newH = entry.contentRect.height;

      if (newW > 0 && newH > 0) {
        camera.aspect = newW / newH;
        camera.updateProjectionMatrix();
        renderer.setSize(newW, newH);
      }
    });
    resizeObserver.observe(currentMount);

    // 8. UNMOUNT CLEANUP
    return () => {
      window.removeEventListener("scroll", handleScroll);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);

      // Clean up WebGL resources
      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.dispose();
    };
  }, [isVisible, type, scrollOffset]);

  return <div ref={mountRef} className={`w-full h-full relative ${className}`} />;
}
