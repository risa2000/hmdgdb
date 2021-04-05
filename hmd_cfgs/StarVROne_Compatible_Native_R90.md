---
title: StarVR One (Compatible FOV, 90Hz)
date: 2020-06-10 11:22:30
---
# StarVR One (Compatible FOV, 90Hz)

## Geometry

as recorded and displayed by [`hmdq` or `hmdv`](https://github.com/risa2000/hmdq).
```
hmdv version 2.1.1 - displaying hmdq output data in no time

    Time stamp: 2020-06-10 11:22:30
  hmdq version: 2.0.1
Output version: 5
    OS version: 10.0.18362.836

... Subsystem: OpenVR ...

OpenVR runtime version: 1.12.5

Recommended render target size: [1440, 1440]

Left eye HAM mesh:
     original vertices: 108, triangles: 36
    optimized vertices: 38, n-gons: 3
             mesh area: 29.57 %

Left eye to head transformation matrix:
    [[ 1.      ,  0.      ,  0.      , -0.035283],
     [ 0.      ,  1.      ,  0.      ,  0.      ],
     [ 0.      ,  0.      ,  1.      ,  0.      ]]

Left eye raw LRBT values:
    left:        -1.428148
    right:        1.428148
    bottom:      -1.428148
    top:          1.428148

Left eye head FOV:
    left:       -53.61 deg
    right:       53.61 deg
    bottom:     -53.61 deg
    top:         53.61 deg
    horiz.:     107.22 deg
    vert.:      107.22 deg

Right eye HAM mesh:
     original vertices: 108, triangles: 36
    optimized vertices: 38, n-gons: 3
             mesh area: 29.57 %

Right eye to head transformation matrix:
    [[ 1.      ,  0.      ,  0.      ,  0.035283],
     [ 0.      ,  1.      ,  0.      ,  0.      ],
     [ 0.      ,  0.      ,  1.      ,  0.      ]]

Right eye raw LRBT values:
    left:        -1.428148
    right:        1.428148
    bottom:      -1.428148
    top:          1.428148

Right eye head FOV:
    left:       -53.61 deg
    right:       53.61 deg
    bottom:     -53.61 deg
    top:         53.61 deg
    horiz.:     107.22 deg
    vert.:      107.22 deg

Total FOV:
    horizontal: 107.22 deg
    vertical:   107.22 deg
    diagonal:   107.22 deg
    overlap:    107.22 deg

View geometry:
    left view rotation:     0.0 deg
    right view rotation:    0.0 deg
    reported IPD:          70.6 mm


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
[![StarVR One (Compatible FOV, 90Hz) - top view](../images/StarVROne_Compatible_Native_R90_top.dmx.png)](../images/StarVROne_Compatible_Native_R90_top.dmx.png)

### Left view
[![StarVR One (Compatible FOV, 90Hz) - left view](../images/StarVROne_Compatible_Native_R90_left.dmx.png)](../images/StarVROne_Compatible_Native_R90_left.dmx.png)

### Back view
[![StarVR One (Compatible FOV, 90Hz) - back view](../images/StarVROne_Compatible_Native_R90_back.dmx.png)](../images/StarVROne_Compatible_Native_R90_back.dmx.png)

### Full view
[![StarVR One (Compatible FOV, 90Hz) - full view](../images/StarVROne_Compatible_Native_R90_over.dmx.png)](../images/StarVROne_Compatible_Native_R90_over.dmx.png)

