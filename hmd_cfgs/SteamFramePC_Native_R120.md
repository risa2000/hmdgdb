---
title: Valve Steam Frame (PC) (120Hz)
date: 2026-10-07 00:25:49
---
# Valve Steam Frame (PC) (120Hz)

## Geometry

as recorded and displayed by [`hmdq` or `hmdv`](https://github.com/risa2000/hmdq).
```
hmdv version 2.2.1 - displaying hmdq output data in no time

    Time stamp: 2026-10-07 00:25:49
  hmdq version: 2.2.1
Output version: 5
    OS version: 10.0.26100.9457

... Subsystem: OpenVR ...

OpenVR runtime version: 2.18.2

Recommended render target size: [2516, 2516]

Left eye HAM mesh:
    No mesh defined by the headset

Left eye to head transformation matrix:
    [[ 1.      ,  0.      ,  0.      , -0.034984],
     [ 0.      ,  1.      ,  0.      ,  0.      ],
     [ 0.      ,  0.      ,  1.      ,  0.      ]]

Left eye raw LRBT values:
    left:        -1.664222
    right:        1.210848
    bottom:      -1.723851
    top:          1.172270

Left eye head FOV:
    left:       -59.00 deg
    right:       50.45 deg
    bottom:     -59.88 deg
    top:         49.53 deg
    horiz.:     109.45 deg
    vert.:      109.42 deg

Right eye HAM mesh:
    No mesh defined by the headset

Right eye to head transformation matrix:
    [[ 1.      ,  0.      ,  0.      ,  0.034984],
     [ 0.      ,  1.      ,  0.      ,  0.      ],
     [ 0.      ,  0.      ,  1.      ,  0.      ]]

Right eye raw LRBT values:
    left:        -1.215316
    right:        1.662352
    bottom:      -1.710422
    top:          1.182877

Right eye head FOV:
    left:       -50.55 deg
    right:       58.97 deg
    bottom:     -59.69 deg
    top:         49.79 deg
    horiz.:     109.52 deg
    vert.:      109.48 deg

Total FOV:
    horizontal: 117.97 deg
    vertical:   109.45 deg
    diagonal:   130.09 deg
    overlap:    101.00 deg

View geometry:
    left view rotation:     0.0 deg
    right view rotation:    0.0 deg
    reported IPD:          70.0 mm


```
Recorded and contributed by _Zomby_.

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
[![Valve Steam Frame (PC) (120Hz) - top view](../images/SteamFramePC_Native_R120_top.dmx.png)](../images/SteamFramePC_Native_R120_top.dmx.png)

### Left view
[![Valve Steam Frame (PC) (120Hz) - left view](../images/SteamFramePC_Native_R120_left.dmx.png)](../images/SteamFramePC_Native_R120_left.dmx.png)

### Back view
[![Valve Steam Frame (PC) (120Hz) - back view](../images/SteamFramePC_Native_R120_back.dmx.png)](../images/SteamFramePC_Native_R120_back.dmx.png)

### Full view
[![Valve Steam Frame (PC) (120Hz) - full view](../images/SteamFramePC_Native_R120_over.dmx.png)](../images/SteamFramePC_Native_R120_over.dmx.png)

