---
title: Pimax 5K Plus (Small FOV, Parallel Projection ON, 120Hz)
date: 2021-02-01 23:15:51
---
# Pimax 5K Plus (Small FOV, Parallel Projection ON, 120Hz)

## Geometry

as recorded and displayed by [`hmdq` or `hmdv`](https://github.com/risa2000/hmdq).
```
hmdv version 2.1.1 - displaying hmdq output data in no time

    Time stamp: 2021-02-01 23:15:51
  hmdq version: 2.1.1
Output version: 5
    OS version: 10.0.19041.746

... Subsystem: OpenVR ...

OpenVR runtime version: 1.15.19

Recommended render target size: [2224, 2632]

Left eye HAM mesh:
     original vertices: 120, triangles: 40
    optimized vertices: 48, n-gons: 4
             mesh area: 19.11 %

Left eye to head transformation matrix:
    [[ 1.      ,  0.      ,  0.      , -0.035   ],
     [ 0.      ,  1.      ,  0.      ,  0.      ],
     [ 0.      ,  0.      ,  1.      ,  0.      ]]

Left eye raw LRBT values:
    left:        -1.736603
    right:        0.945419
    bottom:      -1.586718
    top:          1.586718

Left eye head FOV:
    left:       -60.07 deg
    right:       43.39 deg
    bottom:     -52.81 deg
    top:         52.81 deg
    horiz.:     103.46 deg
    vert.:      105.63 deg

Right eye HAM mesh:
     original vertices: 120, triangles: 40
    optimized vertices: 48, n-gons: 4
             mesh area: 19.11 %

Right eye to head transformation matrix:
    [[ 1.      ,  0.      ,  0.      ,  0.035   ],
     [ 0.      ,  1.      ,  0.      ,  0.      ],
     [ 0.      ,  0.      ,  1.      ,  0.      ]]

Right eye raw LRBT values:
    left:        -0.945419
    right:        1.736603
    bottom:      -1.586718
    top:          1.586718

Right eye head FOV:
    left:       -43.39 deg
    right:       60.07 deg
    bottom:     -52.81 deg
    top:         52.81 deg
    horiz.:     103.46 deg
    vert.:      105.63 deg

Total FOV:
    horizontal: 120.13 deg
    vertical:   105.63 deg
    diagonal:   123.62 deg
    overlap:     86.79 deg

View geometry:
    left view rotation:     0.0 deg
    right view rotation:    0.0 deg
    reported IPD:          70.0 mm


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
[![Pimax 5K Plus (Small FOV, Parallel Projection ON, 120Hz) - top view](../images/Pimax5KPlus_Small_PP_R120_top.dmx.png)](../images/Pimax5KPlus_Small_PP_R120_top.dmx.png)

### Left view
[![Pimax 5K Plus (Small FOV, Parallel Projection ON, 120Hz) - left view](../images/Pimax5KPlus_Small_PP_R120_left.dmx.png)](../images/Pimax5KPlus_Small_PP_R120_left.dmx.png)

### Back view
[![Pimax 5K Plus (Small FOV, Parallel Projection ON, 120Hz) - back view](../images/Pimax5KPlus_Small_PP_R120_back.dmx.png)](../images/Pimax5KPlus_Small_PP_R120_back.dmx.png)

### Full view
[![Pimax 5K Plus (Small FOV, Parallel Projection ON, 120Hz) - full view](../images/Pimax5KPlus_Small_PP_R120_over.dmx.png)](../images/Pimax5KPlus_Small_PP_R120_over.dmx.png)

