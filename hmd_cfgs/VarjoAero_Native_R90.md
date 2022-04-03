---
title: Varjo Aero (90Hz)
date: 2022-04-03 14:53:37
---
# Varjo Aero (90Hz)

## Geometry

as recorded and displayed by [`hmdq` or `hmdv`](https://github.com/risa2000/hmdq).
```
hmdv version 2.1.1 - displaying hmdq output data in no time

    Time stamp: 2022-04-03 14:53:37
  hmdq version: 2.1.1
Output version: 5
    OS version: 10.0.19041.1586

... Subsystem: OpenVR ...

OpenVR runtime version: 1.21.12

Recommended render target size: [4468, 3828]

Left eye HAM mesh:
     original vertices: 522, triangles: 174
    optimized vertices: 174, n-gons: 2
             mesh area: 5.83 %

Left eye to head transformation matrix:
    [[ 1.      ,  0.      ,  0.      , -0.0315  ],
     [ 0.      ,  1.      ,  0.      ,  0.      ],
     [ 0.      ,  0.      ,  1.      ,  0.      ]]

Left eye raw LRBT values:
    left:        -1.533223
    right:        0.700223
    bottom:      -1.055011
    top:          0.774363

Left eye head FOV:
    left:       -54.84 deg
    right:       34.52 deg
    bottom:     -45.31 deg
    top:         37.70 deg
    horiz.:      89.36 deg
    vert.:       83.00 deg

Right eye HAM mesh:
     original vertices: 522, triangles: 174
    optimized vertices: 174, n-gons: 2
             mesh area: 5.83 %

Right eye to head transformation matrix:
    [[ 1.      ,  0.      ,  0.      ,  0.0315  ],
     [ 0.      ,  1.      ,  0.      ,  0.      ],
     [ 0.      ,  0.      ,  1.      ,  0.      ]]

Right eye raw LRBT values:
    left:        -0.706611
    right:        1.506615
    bottom:      -1.052922
    top:          0.772924

Right eye head FOV:
    left:       -34.77 deg
    right:       54.35 deg
    bottom:     -45.24 deg
    top:         37.64 deg
    horiz.:      89.12 deg
    vert.:       82.88 deg

Total FOV:
    horizontal: 109.19 deg
    vertical:    82.94 deg
    diagonal:   119.57 deg
    overlap:     69.28 deg

View geometry:
    left view rotation:     0.0 deg
    right view rotation:    0.0 deg
    reported IPD:          63.0 mm


```
Recorded and contributed by _knob2001_.

## Rendered FOV visualizations

Following images show different views of a rendered FOV visualization of a
particular model in a particular configuration (if there are more available).
The images are rendered to the same scale (when possible) to make them easier
to compare. The _top_, _left_, and _back_ views are rendered with an
orthographic projection to preserve the visual size over the different renders.
The overall view (_full_) uses the perspective projection. Each image is marked
with the information describing the headset configuration and the other aspects
of the image.

### Visualization rules

* Headsets which define the _hidden area mask (HAM)_ are rendered with it. The
  HAM also impacts the calculated FOV points (the red "clown noses" spread
  around the edge of the HAM or the viewing frame).

* Headsets without the HAM have the view rendered with the wireframe only, which
  visualizes the tip of the viewing frustum.

* The FOV points and the subsequent FOV triangles are calculated and visualized
  according to [these
  rules](https://risa2000.github.io/vrdocs/docs/hmd_fov_calculation).

* Viewing frustums are clipped by the _z-clipping plane_ at the same fixed
  distance, so the projected areas on the chequerboard in _back_ and _full_
  views are on the same scale and directly comparable between different
  configurations or headsets.

* For the same reason the interpupillary distance (IPD) is fixed at the same
  value for all headsets.

* Headsets which use canted views and can operate in both modes (native and
  parallel) are rendered with a green HAM projection, which shows the shape of
  the native HAM (rendered in blue) projected to the "normalized"
  (checkerboard) plane parallel to the face. Those green native projections are
  then directly comparable either to the parallel mode HAMs (rendered in red)
  of the same model, or to the native HAMs of the other (traditional) headsets
  which use only the parallel views by design and as such are also rendered
  into the parallel (checkerboard) plane.

### Top view
[![Varjo Aero (90Hz) - top view](../images/VarjoAero_Native_R90_top.dmx.png)](../images/VarjoAero_Native_R90_top.dmx.png)

### Left view
[![Varjo Aero (90Hz) - left view](../images/VarjoAero_Native_R90_left.dmx.png)](../images/VarjoAero_Native_R90_left.dmx.png)

### Back view
[![Varjo Aero (90Hz) - back view](../images/VarjoAero_Native_R90_back.dmx.png)](../images/VarjoAero_Native_R90_back.dmx.png)

### Full view
[![Varjo Aero (90Hz) - full view](../images/VarjoAero_Native_R90_over.dmx.png)](../images/VarjoAero_Native_R90_over.dmx.png)

