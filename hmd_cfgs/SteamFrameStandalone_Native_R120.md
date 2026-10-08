---
title: Valve Steam Frame (Standalone) (120Hz)
date: 2026-10-07 23:42:53
---
# Valve Steam Frame (Standalone) (120Hz)

## Geometry

as recorded and displayed by [`hmdq` or `hmdv`](https://github.com/risa2000/hmdq).
```
hmdv version 2.2.1 - displaying hmdq output data in no time

    Time stamp: 2026-10-07 23:42:53
  hmdq version: 2.2.1
Output version: 5
    OS version: 6.1.7601.21863

... Subsystem: OpenVR ...

OpenVR runtime version: 2.18.2

Recommended render target size: [1728, 1728]

Left eye HAM mesh:
     original vertices: 39, triangles: 13
    optimized vertices: 19, n-gons: 3
             mesh area: 15.64 %

Left eye to head transformation matrix:
    [[ 1.      ,  0.      ,  0.      , -0.028813],
     [ 0.      ,  1.      ,  0.      ,  0.      ],
     [ 0.      ,  0.      ,  1.      ,  0.      ]]

Left eye raw LRBT values:
    left:        -1.664222
    right:        1.210848
    bottom:      -1.723851
    top:          1.172270

Left eye head FOV:
    left:       -58.68 deg
    right:       46.20 deg
    bottom:     -59.88 deg
    top:         49.53 deg
    horiz.:     104.89 deg
    vert.:      109.42 deg

Right eye HAM mesh:
     original vertices: 39, triangles: 13
    optimized vertices: 19, n-gons: 3
             mesh area: 15.64 %

Right eye to head transformation matrix:
    [[ 1.      ,  0.      ,  0.      ,  0.028813],
     [ 0.      ,  1.      ,  0.      ,  0.      ],
     [ 0.      ,  0.      ,  1.      ,  0.      ]]

Right eye raw LRBT values:
    left:        -1.215316
    right:        1.662352
    bottom:      -1.710422
    top:          1.182877

Right eye head FOV:
    left:       -46.25 deg
    right:       58.67 deg
    bottom:     -59.69 deg
    top:         49.79 deg
    horiz.:     104.92 deg
    vert.:      109.48 deg

Total FOV:
    horizontal: 117.35 deg
    vertical:   109.45 deg
    diagonal:   124.85 deg
    overlap:     92.45 deg

View geometry:
    left view rotation:     0.0 deg
    right view rotation:    0.0 deg
    reported IPD:          57.6 mm


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
[![Valve Steam Frame (Standalone) (120Hz) - top view](../images/SteamFrameStandalone_Native_R120_top.dmx.png)](../images/SteamFrameStandalone_Native_R120_top.dmx.png)

### Left view
[![Valve Steam Frame (Standalone) (120Hz) - left view](../images/SteamFrameStandalone_Native_R120_left.dmx.png)](../images/SteamFrameStandalone_Native_R120_left.dmx.png)

### Back view
[![Valve Steam Frame (Standalone) (120Hz) - back view](../images/SteamFrameStandalone_Native_R120_back.dmx.png)](../images/SteamFrameStandalone_Native_R120_back.dmx.png)

### Full view
[![Valve Steam Frame (Standalone) (120Hz) - full view](../images/SteamFrameStandalone_Native_R120_over.dmx.png)](../images/SteamFrameStandalone_Native_R120_over.dmx.png)

