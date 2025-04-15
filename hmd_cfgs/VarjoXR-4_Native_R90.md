---
title: Varjo XR-4 (90Hz)
date: 2025-04-11 15:36:59
---
# Varjo XR-4 (90Hz)

## Geometry

as recorded and displayed by [`hmdq` or `hmdv`](https://github.com/risa2000/hmdq).
```
hmdv version 2.1.8 - displaying hmdq output data in no time

    Time stamp: 2025-04-11 15:36:59
  hmdq version: 2.1.8
Output version: 5
    OS version: 10.0.26100.3775

... Subsystem: OpenVR ...

OpenVR runtime version: 2.9.6

Recommended render target size: [6348, 6288]

Left eye HAM mesh:
    No mesh defined by the headset

Left eye to head transformation matrix:
    [[ 1.      ,  0.      ,  0.      , -0.035746],
     [ 0.      ,  1.      ,  0.      ,  0.      ],
     [ 0.      ,  0.      ,  1.      ,  0.      ]]

Left eye raw LRBT values:
    left:        -1.548176
    right:        1.006582
    bottom:      -1.268762
    top:          1.258663

Left eye head FOV:
    left:       -57.14 deg
    right:       45.19 deg
    bottom:     -51.76 deg
    top:         51.53 deg
    horiz.:     102.33 deg
    vert.:      103.29 deg

Right eye HAM mesh:
    No mesh defined by the headset

Right eye to head transformation matrix:
    [[ 1.      ,  0.      ,  0.      ,  0.035746],
     [ 0.      ,  1.      ,  0.      ,  0.      ],
     [ 0.      ,  0.      ,  1.      ,  0.      ]]

Right eye raw LRBT values:
    left:        -1.006582
    right:        1.548176
    bottom:      -1.268762
    top:          1.258663

Right eye head FOV:
    left:       -45.19 deg
    right:       57.14 deg
    bottom:     -51.76 deg
    top:         51.53 deg
    horiz.:     102.33 deg
    vert.:      103.29 deg

Total FOV:
    horizontal: 114.28 deg
    vertical:   103.29 deg
    diagonal:   126.83 deg
    overlap:     90.38 deg

View geometry:
    left view rotation:     0.0 deg
    right view rotation:    0.0 deg
    reported IPD:          71.5 mm


```
Recorded and contributed by _Omniwhatever_.

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
[![Varjo XR-4 (90Hz) - top view](../images/VarjoXR-4_Native_R90_top.dmx.png)](../images/VarjoXR-4_Native_R90_top.dmx.png)

### Left view
[![Varjo XR-4 (90Hz) - left view](../images/VarjoXR-4_Native_R90_left.dmx.png)](../images/VarjoXR-4_Native_R90_left.dmx.png)

### Back view
[![Varjo XR-4 (90Hz) - back view](../images/VarjoXR-4_Native_R90_back.dmx.png)](../images/VarjoXR-4_Native_R90_back.dmx.png)

### Full view
[![Varjo XR-4 (90Hz) - full view](../images/VarjoXR-4_Native_R90_over.dmx.png)](../images/VarjoXR-4_Native_R90_over.dmx.png)

