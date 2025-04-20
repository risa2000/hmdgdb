---
title: PICO 4 (90Hz)
date: 2022-10-03 19:32:53
---
# PICO 4 (90Hz)

## Geometry

as recorded and displayed by [`hmdq` or `hmdv`](https://github.com/risa2000/hmdq).
```
hmdv version 2.2.1 - displaying hmdq output data in no time

    Time stamp: 2022-10-03 19:32:53
  hmdq version: 2.1.1
Output version: 5
    OS version: 10.0.19041.2006

... Subsystem: OpenVR ...

OpenVR runtime version: 1.23.7

Recommended render target size: [2160, 2160]

Left eye HAM mesh:
    No mesh defined by the headset

Left eye to head transformation matrix:
    [[ 1.      ,  0.      ,  0.      , -0.032   ],
     [ 0.      ,  1.      ,  0.      ,  0.      ],
     [ 0.      ,  0.      ,  1.      ,  0.      ]]

Left eye raw LRBT values:
    left:        -1.279942
    right:        1.279942
    bottom:      -1.279942
    top:          1.279942

Left eye head FOV:
    left:       -52.00 deg
    right:       52.00 deg
    bottom:     -52.00 deg
    top:         52.00 deg
    horiz.:     104.00 deg
    vert.:      104.00 deg

Right eye HAM mesh:
    No mesh defined by the headset

Right eye to head transformation matrix:
    [[ 1.      ,  0.      ,  0.      ,  0.032   ],
     [ 0.      ,  1.      ,  0.      ,  0.      ],
     [ 0.      ,  0.      ,  1.      ,  0.      ]]

Right eye raw LRBT values:
    left:        -1.279942
    right:        1.279942
    bottom:      -1.279942
    top:          1.279942

Right eye head FOV:
    left:       -52.00 deg
    right:       52.00 deg
    bottom:     -52.00 deg
    top:         52.00 deg
    horiz.:     104.00 deg
    vert.:      104.00 deg

Total FOV:
    horizontal: 104.00 deg
    vertical:   104.00 deg
    diagonal:   122.16 deg
    overlap:    104.00 deg

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
[![PICO 4 (90Hz) - top view](../images/PICO4_Native_R90_top.dmx.png)](../images/PICO4_Native_R90_top.dmx.png)

### Left view
[![PICO 4 (90Hz) - left view](../images/PICO4_Native_R90_left.dmx.png)](../images/PICO4_Native_R90_left.dmx.png)

### Back view
[![PICO 4 (90Hz) - back view](../images/PICO4_Native_R90_back.dmx.png)](../images/PICO4_Native_R90_back.dmx.png)

### Full view
[![PICO 4 (90Hz) - full view](../images/PICO4_Native_R90_over.dmx.png)](../images/PICO4_Native_R90_over.dmx.png)

