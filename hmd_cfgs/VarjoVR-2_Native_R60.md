---
title: Varjo VR-2 (60Hz)
date: 2022-10-20 20:30:10
---
# Varjo VR-2 (60Hz)

## Geometry

as recorded and displayed by [`hmdq` or `hmdv`](https://github.com/risa2000/hmdq).
```
hmdv version 2.1.5 - displaying hmdq output data in no time

    Time stamp: 2022-10-20 20:30:10
  hmdq version: 2.1.3
Output version: 5
    OS version: 10.0.19041.2130

... Subsystem: OpenVR ...

OpenVR runtime version: 1.24.6

Recommended render target size: [2048, 2048]

Left eye HAM mesh:
     original vertices: 96, triangles: 32
    optimized vertices: 40, n-gons: 4
             mesh area: 17.84 %

Left eye to head transformation matrix:
    [[ 1.      ,  0.      ,  0.      , -0.03074 ],
     [ 0.      ,  1.      ,  0.      ,  0.      ],
     [ 0.      ,  0.      ,  1.      ,  0.03    ]]

Left eye raw LRBT values:
    left:        -0.985081
    right:        0.733315
    bottom:      -0.988370
    top:          0.988316

Left eye head FOV:
    left:       -44.57 deg
    right:       36.25 deg
    bottom:     -44.66 deg
    top:         44.66 deg
    horiz.:      80.82 deg
    vert.:       89.33 deg

Right eye HAM mesh:
     original vertices: 96, triangles: 32
    optimized vertices: 40, n-gons: 4
             mesh area: 17.84 %

Right eye to head transformation matrix:
    [[ 1.      ,  0.      ,  0.      ,  0.03074 ],
     [ 0.      ,  1.      ,  0.      ,  0.      ],
     [ 0.      ,  0.      ,  1.      ,  0.03    ]]

Right eye raw LRBT values:
    left:        -0.710317
    right:        0.990550
    bottom:      -0.987397
    top:          0.987209

Right eye head FOV:
    left:       -35.39 deg
    right:       44.73 deg
    bottom:     -44.64 deg
    top:         44.63 deg
    horiz.:      80.11 deg
    vert.:       89.27 deg

Total FOV:
    horizontal:  89.30 deg
    vertical:    89.30 deg
    diagonal:    92.42 deg
    overlap:     71.64 deg

View geometry:
    left view rotation:     0.0 deg
    right view rotation:    0.0 deg
    reported IPD:          61.5 mm


```
Recorded and contributed by _Maika_.

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
[![Varjo VR-2 (60Hz) - top view](../images/VarjoVR-2_Native_R60_top.dmx.png)](../images/VarjoVR-2_Native_R60_top.dmx.png)

### Left view
[![Varjo VR-2 (60Hz) - left view](../images/VarjoVR-2_Native_R60_left.dmx.png)](../images/VarjoVR-2_Native_R60_left.dmx.png)

### Back view
[![Varjo VR-2 (60Hz) - back view](../images/VarjoVR-2_Native_R60_back.dmx.png)](../images/VarjoVR-2_Native_R60_back.dmx.png)

### Full view
[![Varjo VR-2 (60Hz) - full view](../images/VarjoVR-2_Native_R60_over.dmx.png)](../images/VarjoVR-2_Native_R60_over.dmx.png)

