---
title: HTC Vive Elite (90Hz)
date: 2021-03-26 14:41:15
---
# HTC Vive Elite (90Hz)

## Geometry

as recorded and displayed by [`hmdq` or `hmdv`](https://github.com/risa2000/hmdq).
```
hmdv version 2.1.1 - displaying hmdq output data in no time

    Time stamp: 2021-03-26 14:41:15
  hmdq version: 2.1.1
Output version: 5
    OS version: 10.0.19041.685

... Subsystem: OpenVR ...

OpenVR runtime version: 1.17.2

Recommended render target size: [1912, 2256]

Left eye HAM mesh:
     original vertices: 36, triangles: 12
    optimized vertices: 20, n-gons: 5
             mesh area: 8.73 %

Left eye to head transformation matrix:
    [[ 1.      ,  0.      ,  0.      , -0.03385 ],
     [ 0.      ,  1.      ,  0.      ,  0.      ],
     [ 0.      ,  0.      ,  1.      ,  0.015   ]]

Left eye raw LRBT values:
    left:        -1.139201
    right:        0.993099
    bottom:      -1.254701
    top:          1.262598

Left eye head FOV:
    left:       -48.72 deg
    right:       40.14 deg
    bottom:     -51.45 deg
    top:         51.62 deg
    horiz.:      88.86 deg
    vert.:      103.07 deg

Right eye HAM mesh:
     original vertices: 36, triangles: 12
    optimized vertices: 20, n-gons: 5
             mesh area: 9.54 %

Right eye to head transformation matrix:
    [[ 1.      ,  0.      ,  0.      ,  0.03385 ],
     [ 0.      ,  1.      ,  0.      ,  0.      ],
     [ 0.      ,  0.      ,  1.      ,  0.015   ]]

Right eye raw LRBT values:
    left:        -0.983385
    right:        1.146312
    bottom:      -1.253234
    top:          1.260992

Right eye head FOV:
    left:       -39.44 deg
    right:       48.90 deg
    bottom:     -51.41 deg
    top:         51.58 deg
    horiz.:      88.34 deg
    vert.:      103.00 deg

Total FOV:
    horizontal:  97.62 deg
    vertical:   103.03 deg
    diagonal:   109.31 deg
    overlap:     79.57 deg

View geometry:
    left view rotation:     0.0 deg
    right view rotation:    0.0 deg
    reported IPD:          67.7 mm


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
[![HTC Vive Elite (90Hz) - top view](../images/ViveElite_Native_R90_top.dmx.png)](../images/ViveElite_Native_R90_top.dmx.png)

### Left view
[![HTC Vive Elite (90Hz) - left view](../images/ViveElite_Native_R90_left.dmx.png)](../images/ViveElite_Native_R90_left.dmx.png)

### Back view
[![HTC Vive Elite (90Hz) - back view](../images/ViveElite_Native_R90_back.dmx.png)](../images/ViveElite_Native_R90_back.dmx.png)

### Full view
[![HTC Vive Elite (90Hz) - full view](../images/ViveElite_Native_R90_over.dmx.png)](../images/ViveElite_Native_R90_over.dmx.png)

