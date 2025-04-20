---
title: Pimax Crystal Super (90Hz)
date: 2025-04-10 22:45:39
---
# Pimax Crystal Super (90Hz)

## Geometry

as recorded and displayed by [`hmdq` or `hmdv`](https://github.com/risa2000/hmdq).
```
hmdv version 2.2.1 - displaying hmdq output data in no time

    Time stamp: 2025-04-10 22:45:39
  hmdq version: 2.1.5
Output version: 5
    OS version: 10.0.26100.3775

... Subsystem: OpenVR ...

OpenVR runtime version: 2.9.6

Recommended render target size: [6240, 6280]

Left eye HAM mesh:
     original vertices: 120, triangles: 40
    optimized vertices: 48, n-gons: 4
             mesh area: 3.49 %

Left eye to head transformation matrix:
    [[ 1.      ,  0.      ,  0.      , -0.034   ],
     [ 0.      ,  1.      ,  0.      ,  0.      ],
     [ 0.      ,  0.      ,  1.      ,  0.      ]]

Left eye raw LRBT values:
    left:        -2.007429
    right:        1.258067
    bottom:      -1.643018
    top:          1.643018

Left eye head FOV:
    left:       -63.52 deg
    right:       51.52 deg
    bottom:     -58.67 deg
    top:         58.67 deg
    horiz.:     115.04 deg
    vert.:      117.35 deg

Right eye HAM mesh:
     original vertices: 120, triangles: 40
    optimized vertices: 48, n-gons: 4
             mesh area: 3.49 %

Right eye to head transformation matrix:
    [[ 1.      ,  0.      ,  0.      ,  0.034   ],
     [ 0.      ,  1.      ,  0.      ,  0.      ],
     [ 0.      ,  0.      ,  1.      ,  0.      ]]

Right eye raw LRBT values:
    left:        -1.258067
    right:        2.007429
    bottom:      -1.643018
    top:          1.643018

Right eye head FOV:
    left:       -51.52 deg
    right:       63.52 deg
    bottom:     -58.67 deg
    top:         58.67 deg
    horiz.:     115.04 deg
    vert.:      117.35 deg

Total FOV:
    horizontal: 127.04 deg
    vertical:   117.35 deg
    diagonal:   133.34 deg
    overlap:    103.04 deg

View geometry:
    left view rotation:     0.0 deg
    right view rotation:    0.0 deg
    reported IPD:          68.0 mm


```
Recorded and contributed by _Omniwhatever_.

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
[![Pimax Crystal Super (90Hz) - top view](../images/PimaxCrystalSuper_Native_R90_top.dmx.png)](../images/PimaxCrystalSuper_Native_R90_top.dmx.png)

### Left view
[![Pimax Crystal Super (90Hz) - left view](../images/PimaxCrystalSuper_Native_R90_left.dmx.png)](../images/PimaxCrystalSuper_Native_R90_left.dmx.png)

### Back view
[![Pimax Crystal Super (90Hz) - back view](../images/PimaxCrystalSuper_Native_R90_back.dmx.png)](../images/PimaxCrystalSuper_Native_R90_back.dmx.png)

### Full view
[![Pimax Crystal Super (90Hz) - full view](../images/PimaxCrystalSuper_Native_R90_over.dmx.png)](../images/PimaxCrystalSuper_Native_R90_over.dmx.png)

