---
title: Pico Neo2 (72Hz)
date: 2021-01-26 18:40:46
---
# Pico Neo2 (72Hz)

## Geometry

as recorded and displayed by [`hmdq` or `hmdv`](https://github.com/risa2000/hmdq).
```
hmdv version 2.1.1 - displaying hmdq output data in no time

    Time stamp: 2021-01-26 18:40:46
  hmdq version: 1.3.1
Output version: 4
    OS version: 10.0.19041.685

... Subsystem: OpenVR ...

OpenVR runtime version: 1.16.4

Recommended render target size: [2352, 2352]

Left eye HAM mesh:
    No mesh defined by the headset

Left eye to head transformation matrix:
    [[ 1.      ,  0.      ,  0.      , -0.032   ],
     [ 0.      ,  1.      ,  0.      ,  0.      ],
     [ 0.      ,  0.      ,  1.      ,  0.      ]]

Left eye raw LRBT values:
    left:        -1.213097
    right:        1.213097
    bottom:      -1.213097
    top:          1.213097

Left eye head FOV:
    left:       -50.50 deg
    right:       50.50 deg
    bottom:     -50.50 deg
    top:         50.50 deg
    horiz.:     101.00 deg
    vert.:      101.00 deg

Right eye HAM mesh:
    No mesh defined by the headset

Right eye to head transformation matrix:
    [[ 1.      ,  0.      ,  0.      ,  0.032   ],
     [ 0.      ,  1.      ,  0.      ,  0.      ],
     [ 0.      ,  0.      ,  1.      ,  0.      ]]

Right eye raw LRBT values:
    left:        -1.213097
    right:        1.213097
    bottom:      -1.213097
    top:          1.213097

Right eye head FOV:
    left:       -50.50 deg
    right:       50.50 deg
    bottom:     -50.50 deg
    top:         50.50 deg
    horiz.:     101.00 deg
    vert.:      101.00 deg

Total FOV:
    horizontal: 101.00 deg
    vertical:   101.00 deg
    diagonal:   119.52 deg
    overlap:    101.00 deg

View geometry:
    left view rotation:     0.0 deg
    right view rotation:    0.0 deg
    reported IPD:          64.0 mm


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
[![Pico Neo2 (72Hz) - top view](../images/PicoNeo2_Native_R72_top.dmx.png)](../images/PicoNeo2_Native_R72_top.dmx.png)

### Left view
[![Pico Neo2 (72Hz) - left view](../images/PicoNeo2_Native_R72_left.dmx.png)](../images/PicoNeo2_Native_R72_left.dmx.png)

### Back view
[![Pico Neo2 (72Hz) - back view](../images/PicoNeo2_Native_R72_back.dmx.png)](../images/PicoNeo2_Native_R72_back.dmx.png)

### Full view
[![Pico Neo2 (72Hz) - full view](../images/PicoNeo2_Native_R72_over.dmx.png)](../images/PicoNeo2_Native_R72_over.dmx.png)

