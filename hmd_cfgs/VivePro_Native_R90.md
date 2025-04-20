---
title: HTC Vive Pro (90Hz)
date: 2025-05-03 12:44:37
---
# HTC Vive Pro (90Hz)

## Geometry

as recorded and displayed by [`hmdq` or `hmdv`](https://github.com/risa2000/hmdq).
```
hmdv version 2.2.1 - displaying hmdq output data in no time

    Time stamp: 2025-05-03 12:44:37
  hmdq version: 2.2.1
Output version: 5
    OS version: 10.0.19041.5737

... Subsystem: OpenVR ...

OpenVR runtime version: 2.9.6

Recommended render target size: [2468, 2740]

Left eye HAM mesh:
     original vertices: 90, triangles: 30
    optimized vertices: 36, n-gons: 5
             mesh area: 20.20 %

Left eye to head transformation matrix:
    [[ 1.      ,  0.      ,  0.      , -0.03555 ],
     [ 0.      ,  1.      ,  0.      ,  0.      ],
     [ 0.      ,  0.      ,  1.      ,  0.015   ]]

Left eye raw LRBT values:
    left:        -1.354895
    right:        1.209037
    bottom:      -1.423536
    top:          1.427617

Left eye head FOV:
    left:       -53.57 deg
    right:       45.27 deg
    bottom:     -54.33 deg
    top:         53.49 deg
    horiz.:      98.84 deg
    vert.:      107.82 deg

Right eye HAM mesh:
     original vertices: 90, triangles: 30
    optimized vertices: 36, n-gons: 5
             mesh area: 20.20 %

Right eye to head transformation matrix:
    [[ 1.      ,  0.      ,  0.      ,  0.03555 ],
     [ 0.      ,  1.      ,  0.      ,  0.      ],
     [ 0.      ,  0.      ,  1.      ,  0.015   ]]

Right eye raw LRBT values:
    left:        -1.207865
    right:        1.358202
    bottom:      -1.427286
    top:          1.423707

Right eye head FOV:
    left:       -45.22 deg
    right:       53.64 deg
    bottom:     -54.40 deg
    top:         53.41 deg
    horiz.:      98.86 deg
    vert.:      107.81 deg

Total FOV:
    horizontal: 107.21 deg
    vertical:   107.82 deg
    diagonal:   110.61 deg
    overlap:     90.49 deg

View geometry:
    left view rotation:     0.0 deg
    right view rotation:    0.0 deg
    reported IPD:          71.1 mm


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
[![HTC Vive Pro (90Hz) - top view](../images/VivePro_Native_R90_top.dmx.png)](../images/VivePro_Native_R90_top.dmx.png)

### Left view
[![HTC Vive Pro (90Hz) - left view](../images/VivePro_Native_R90_left.dmx.png)](../images/VivePro_Native_R90_left.dmx.png)

### Back view
[![HTC Vive Pro (90Hz) - back view](../images/VivePro_Native_R90_back.dmx.png)](../images/VivePro_Native_R90_back.dmx.png)

### Full view
[![HTC Vive Pro (90Hz) - full view](../images/VivePro_Native_R90_over.dmx.png)](../images/VivePro_Native_R90_over.dmx.png)

