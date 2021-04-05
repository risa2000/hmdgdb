---
title: Valve Index (Parallel Projection ON, 144Hz)
date: 2019-08-30 20:44:10
---
# Valve Index (Parallel Projection ON, 144Hz)

## Geometry

as recorded and displayed by [`hmdq` or `hmdv`](https://github.com/risa2000/hmdq).
```
hmdv version 2.1.1 - displaying hmdq output data in no time

    Time stamp: 2019-08-30 20:44:10
  hmdq version: 1.2.2
Output version: 3
    OS version: 10.0.17763.678

... Subsystem: OpenVR ...

OpenVR runtime version: 1.7.12

Recommended render target size: [2468, 2740]

Left eye HAM mesh:
     original vertices: 99, triangles: 33
    optimized vertices: 38, n-gons: 3
             mesh area: 24.88 %

Left eye to head transformation matrix:
    [[ 1.      ,  0.      ,  0.      , -0.034772],
     [ 0.      ,  1.      ,  0.      ,  0.      ],
     [ 0.      ,  0.      ,  1.      ,  0.      ]]

Left eye raw LRBT values:
    left:        -1.538816
    right:        1.055010
    bottom:      -1.408557
    top:          1.413973

Left eye head FOV:
    left:       -54.60 deg
    right:       42.08 deg
    bottom:     -54.12 deg
    top:         54.36 deg
    horiz.:      96.68 deg
    vert.:      108.48 deg

Right eye HAM mesh:
     original vertices: 99, triangles: 33
    optimized vertices: 38, n-gons: 3
             mesh area: 24.88 %

Right eye to head transformation matrix:
    [[ 1.      ,  0.      ,  0.      ,  0.034772],
     [ 0.      ,  1.      ,  0.      ,  0.      ],
     [ 0.      ,  0.      ,  1.      ,  0.      ]]

Right eye raw LRBT values:
    left:        -1.054081
    right:        1.542173
    bottom:      -1.407222
    top:          1.415720

Right eye head FOV:
    left:       -42.05 deg
    right:       54.66 deg
    bottom:     -54.08 deg
    top:         54.39 deg
    horiz.:      96.71 deg
    vert.:      108.47 deg

Total FOV:
    horizontal: 109.26 deg
    vertical:   108.47 deg
    diagonal:   114.19 deg
    overlap:     84.13 deg

View geometry:
    left view rotation:     0.0 deg
    right view rotation:    0.0 deg
    reported IPD:          69.5 mm


```
Recorded and contributed by _jojon_.

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
[![Valve Index (Parallel Projection ON, 144Hz) - top view](../images/Index_PP_R144_top.dmx.png)](../images/Index_PP_R144_top.dmx.png)

### Left view
[![Valve Index (Parallel Projection ON, 144Hz) - left view](../images/Index_PP_R144_left.dmx.png)](../images/Index_PP_R144_left.dmx.png)

### Back view
[![Valve Index (Parallel Projection ON, 144Hz) - back view](../images/Index_PP_R144_back.dmx.png)](../images/Index_PP_R144_back.dmx.png)

### Full view
[![Valve Index (Parallel Projection ON, 144Hz) - full view](../images/Index_PP_R144_over.dmx.png)](../images/Index_PP_R144_over.dmx.png)

