---
title: Pimax 8K (Large FOV, Parallel Projection ON, 80Hz)
date: 2019-08-02 23:20:00
---
# Pimax 8K (Large FOV, Parallel Projection ON, 80Hz)

## Geometry

as recorded and displayed by [`hmdq` or `hmdv`](https://github.com/risa2000/hmdq).
```
hmdv version 2.2.1 - displaying hmdq output data in no time

    Time stamp: 2019-08-02 23:20:00
  hmdq version: 0.2.4
Output version: 1
    OS version: 10.0.17763.615

... Subsystem: OpenVR ...

OpenVR runtime version: n/a

Recommended render target size: [3392, 1656]

Left eye HAM mesh:
     original vertices: 60, triangles: 20
    optimized vertices: 24, n-gons: 2
             mesh area: 1.75 %

Left eye to head transformation matrix:
    [[ 1.      ,  0.      ,  0.      , -0.033502],
     [ 0.      ,  1.      ,  0.      ,  0.      ],
     [ 0.      ,  0.      ,  1.      ,  0.      ]]

Left eye raw LRBT values:
    left:        -5.756303
    right:        0.945419
    bottom:      -1.635803
    top:          1.635803

Left eye head FOV:
    left:       -80.14 deg
    right:       43.39 deg
    bottom:     -58.07 deg
    top:         58.07 deg
    horiz.:     123.54 deg
    vert.:      116.14 deg

Right eye HAM mesh:
     original vertices: 60, triangles: 20
    optimized vertices: 24, n-gons: 2
             mesh area: 1.75 %

Right eye to head transformation matrix:
    [[ 1.      ,  0.      ,  0.      ,  0.033502],
     [ 0.      ,  1.      ,  0.      ,  0.      ],
     [ 0.      ,  0.      ,  1.      ,  0.      ]]

Right eye raw LRBT values:
    left:        -0.945419
    right:        5.756303
    bottom:      -1.635803
    top:          1.635803

Right eye head FOV:
    left:       -43.39 deg
    right:       80.14 deg
    bottom:     -58.07 deg
    top:         58.07 deg
    horiz.:     123.54 deg
    vert.:      116.14 deg

Total FOV:
    horizontal: 160.29 deg
    vertical:   116.14 deg
    diagonal:   161.03 deg
    overlap:     86.79 deg

View geometry:
    left view rotation:     0.0 deg
    right view rotation:    0.0 deg
    reported IPD:          67.0 mm


```
Recorded and contributed by _Heliosurge_.

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
[![Pimax 8K (Large FOV, Parallel Projection ON, 80Hz) - top view](../images/Pimax8K_Large_PP_R80_top.dmx.png)](../images/Pimax8K_Large_PP_R80_top.dmx.png)

### Left view
[![Pimax 8K (Large FOV, Parallel Projection ON, 80Hz) - left view](../images/Pimax8K_Large_PP_R80_left.dmx.png)](../images/Pimax8K_Large_PP_R80_left.dmx.png)

### Back view
[![Pimax 8K (Large FOV, Parallel Projection ON, 80Hz) - back view](../images/Pimax8K_Large_PP_R80_back.dmx.png)](../images/Pimax8K_Large_PP_R80_back.dmx.png)

### Full view
[![Pimax 8K (Large FOV, Parallel Projection ON, 80Hz) - full view](../images/Pimax8K_Large_PP_R80_over.dmx.png)](../images/Pimax8K_Large_PP_R80_over.dmx.png)

