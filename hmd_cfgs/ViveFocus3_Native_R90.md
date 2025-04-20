---
title: HTC Vive Focus 3 (90Hz)
date: 2023-01-29 15:38:07
---
# HTC Vive Focus 3 (90Hz)

## Geometry

as recorded and displayed by [`hmdq` or `hmdv`](https://github.com/risa2000/hmdq).
```
hmdv version 2.2.1 - displaying hmdq output data in no time

    Time stamp: 2023-01-29 15:38:07
  hmdq version: 2.1.4
Output version: 5
    OS version: 10.0.19041.2486

... Subsystem: OpenVR ...

OpenVR runtime version: 1.25.3

Recommended render target size: [3760, 3760]

Left eye HAM mesh:
    optimized vertices: 3, n-gons: 1
             mesh area: 0.00 %

Left eye to head transformation matrix:
    [[ 1.      ,  0.      ,  0.      , -0.032   ],
     [ 0.      ,  1.      ,  0.      ,  0.      ],
     [ 0.      ,  0.      ,  1.      ,  0.      ]]

Left eye raw LRBT values:
    left:        -1.614147
    right:        0.842853
    bottom:      -1.122658
    top:          1.121301

Left eye head FOV:
    left:       -58.22 deg
    right:       40.13 deg
    bottom:     -48.31 deg
    top:         48.27 deg
    horiz.:      98.35 deg
    vert.:       96.58 deg

Right eye HAM mesh:
    optimized vertices: 3, n-gons: 1
             mesh area: 0.00 %

Right eye to head transformation matrix:
    [[ 1.      ,  0.      ,  0.      ,  0.032   ],
     [ 0.      ,  1.      ,  0.      ,  0.      ],
     [ 0.      ,  0.      ,  1.      ,  0.      ]]

Right eye raw LRBT values:
    left:        -0.825328
    right:        1.636022
    bottom:      -1.121546
    top:          1.121492

Right eye head FOV:
    left:       -39.53 deg
    right:       58.57 deg
    bottom:     -48.28 deg
    top:         48.28 deg
    horiz.:      98.10 deg
    vert.:       96.56 deg

Total FOV:
    horizontal: 116.79 deg
    vertical:    96.57 deg
    diagonal:   126.18 deg
    overlap:     79.66 deg

View geometry:
    left view rotation:     0.0 deg
    right view rotation:    0.0 deg
    reported IPD:          64.0 mm


```
Recorded and contributed by _MC_.

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
[![HTC Vive Focus 3 (90Hz) - top view](../images/ViveFocus3_Native_R90_top.dmx.png)](../images/ViveFocus3_Native_R90_top.dmx.png)

### Left view
[![HTC Vive Focus 3 (90Hz) - left view](../images/ViveFocus3_Native_R90_left.dmx.png)](../images/ViveFocus3_Native_R90_left.dmx.png)

### Back view
[![HTC Vive Focus 3 (90Hz) - back view](../images/ViveFocus3_Native_R90_back.dmx.png)](../images/ViveFocus3_Native_R90_back.dmx.png)

### Full view
[![HTC Vive Focus 3 (90Hz) - full view](../images/ViveFocus3_Native_R90_over.dmx.png)](../images/ViveFocus3_Native_R90_over.dmx.png)

