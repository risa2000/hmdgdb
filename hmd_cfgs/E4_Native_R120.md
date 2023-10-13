---
title: DPVR E4 (120Hz)
date: 2023-04-10 20:04:53
---
# DPVR E4 (120Hz)

## Geometry

as recorded and displayed by [`hmdq` or `hmdv`](https://github.com/risa2000/hmdq).
```
hmdv version 2.1.7 - displaying hmdq output data in no time

    Time stamp: 2023-04-10 20:04:53
  hmdq version: 2.1.3
Output version: 5
    OS version: 10.0.19041.2728

... Subsystem: OpenVR ...

OpenVR runtime version: 1.25.7

Recommended render target size: [2204, 2204]

Left eye HAM mesh:
    No mesh defined by the headset

Left eye to head transformation matrix:
    [[ 1.      ,  0.      ,  0.      , -0.034   ],
     [ 0.      ,  1.      ,  0.      ,  0.      ],
     [ 0.      ,  0.      ,  1.      ,  0.      ]]

Left eye raw LRBT values:
    left:        -1.110613
    right:        1.110613
    bottom:      -1.110613
    top:          1.110613

Left eye head FOV:
    left:       -48.00 deg
    right:       48.00 deg
    bottom:     -48.00 deg
    top:         48.00 deg
    horiz.:      96.00 deg
    vert.:       96.00 deg

Right eye HAM mesh:
    No mesh defined by the headset

Right eye to head transformation matrix:
    [[ 1.      ,  0.      ,  0.      ,  0.034   ],
     [ 0.      ,  1.      ,  0.      ,  0.      ],
     [ 0.      ,  0.      ,  1.      ,  0.      ]]

Right eye raw LRBT values:
    left:        -1.110613
    right:        1.110613
    bottom:      -1.110613
    top:          1.110613

Right eye head FOV:
    left:       -48.00 deg
    right:       48.00 deg
    bottom:     -48.00 deg
    top:         48.00 deg
    horiz.:      96.00 deg
    vert.:       96.00 deg

Total FOV:
    horizontal:  96.00 deg
    vertical:    96.00 deg
    diagonal:   115.03 deg
    overlap:     96.00 deg

View geometry:
    left view rotation:     0.0 deg
    right view rotation:    0.0 deg
    reported IPD:          68.0 mm


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
[![DPVR E4 (120Hz) - top view](../images/E4_Native_R120_top.dmx.png)](../images/E4_Native_R120_top.dmx.png)

### Left view
[![DPVR E4 (120Hz) - left view](../images/E4_Native_R120_left.dmx.png)](../images/E4_Native_R120_left.dmx.png)

### Back view
[![DPVR E4 (120Hz) - back view](../images/E4_Native_R120_back.dmx.png)](../images/E4_Native_R120_back.dmx.png)

### Full view
[![DPVR E4 (120Hz) - full view](../images/E4_Native_R120_over.dmx.png)](../images/E4_Native_R120_over.dmx.png)

