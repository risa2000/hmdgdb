---
title: HTC Vive (90Hz)
date: 2020-04-18 10:16:22
---
# HTC Vive (90Hz)

## Geometry

as recorded and displayed by [`hmdq` or `hmdv`](https://github.com/risa2000/hmdq).
```
hmdv version 2.1.1 - displaying hmdq output data in no time

    Time stamp: 2020-04-18 10:16:22
  hmdq version: 2.0.0
Output version: 5
    OS version: 10.0.18362.720

... Subsystem: OpenVR ...

OpenVR runtime version: 1.10.32

Recommended render target size: [1852, 2056]

Left eye HAM mesh:
     original vertices: 60, triangles: 20
    optimized vertices: 28, n-gons: 4
             mesh area: 19.10 %

Left eye to head transformation matrix:
    [[ 1.      ,  0.      ,  0.      , -0.0362  ],
     [ 0.      ,  1.      ,  0.      ,  0.      ],
     [ 0.      ,  0.      ,  1.      ,  0.015   ]]

Left eye raw LRBT values:
    left:        -1.397283
    right:        1.250510
    bottom:      -1.477517
    top:          1.464221

Left eye head FOV:
    left:       -54.41 deg
    right:       46.75 deg
    bottom:     -55.91 deg
    top:         55.67 deg
    horiz.:     101.16 deg
    vert.:      111.58 deg

Right eye HAM mesh:
     original vertices: 60, triangles: 20
    optimized vertices: 28, n-gons: 4
             mesh area: 19.10 %

Right eye to head transformation matrix:
    [[ 1.      ,  0.      ,  0.      ,  0.0362  ],
     [ 0.      ,  1.      ,  0.      ,  0.      ],
     [ 0.      ,  0.      ,  1.      ,  0.015   ]]

Right eye raw LRBT values:
    left:        -1.247887
    right:        1.394608
    bottom:      -1.475235
    top:          1.460934

Right eye head FOV:
    left:       -46.69 deg
    right:       54.36 deg
    bottom:     -55.87 deg
    top:         55.61 deg
    horiz.:     101.05 deg
    vert.:      111.48 deg

Total FOV:
    horizontal: 108.77 deg
    vertical:   111.53 deg
    diagonal:   113.18 deg
    overlap:     93.45 deg

View geometry:
    left view rotation:     0.0 deg
    right view rotation:    0.0 deg
    reported IPD:          72.4 mm


```
Recorded and contributed by _risa2000_.

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
[![HTC Vive (90Hz) - top view](../images/Vive_Native_R90_top.dmx.png)](../images/Vive_Native_R90_top.dmx.png)

### Left view
[![HTC Vive (90Hz) - left view](../images/Vive_Native_R90_left.dmx.png)](../images/Vive_Native_R90_left.dmx.png)

### Back view
[![HTC Vive (90Hz) - back view](../images/Vive_Native_R90_back.dmx.png)](../images/Vive_Native_R90_back.dmx.png)

### Full view
[![HTC Vive (90Hz) - full view](../images/Vive_Native_R90_over.dmx.png)](../images/Vive_Native_R90_over.dmx.png)

