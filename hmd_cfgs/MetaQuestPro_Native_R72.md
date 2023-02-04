---
title: Oculus Meta Quest Pro (72Hz)
date: 2022-10-29 11:56:41
---
# Oculus Meta Quest Pro (72Hz)

## Geometry

as recorded and displayed by [`hmdq` or `hmdv`](https://github.com/risa2000/hmdq).
```
hmdv version 2.1.5 - displaying hmdq output data in no time

    Time stamp: 2022-10-29 11:56:41
  hmdq version: 2.1.3
Output version: 5
    OS version: 10.0.19041.2130

... Subsystem: Oculus ...

Oculus runtime version: 1.78.0

Default FOV:

    Recommended render target size: [2160, 2224]

    Left eye HAM mesh:
         original vertices: 52, triangles: 52
        optimized vertices: 52, n-gons: 2
                 mesh area: 14.11 %

    Left eye to head transformation matrix:
        [[ 1.      ,  0.      ,  0.      , -0.032587],
         [ 0.      ,  1.      ,  0.      ,  0.      ],
         [ 0.      ,  0.      ,  1.      ,  0.      ]]

    Left eye raw LRBT values:
        left:        -1.376382
        right:        0.839100
        bottom:      -1.376382
        top:          0.900404

    Left eye render description:
        distorted viewport: [[0, 0], [1376, 1472]]
        pixels per tan:     [968.74, 971.56]
        HMD to eye pose:
            position:    [-0.032587, 0.0000, 0.0000]
            orientation: [0, 0, 0, 1]

    Left eye head FOV:
        left:       -54.00 deg
        right:       39.86 deg
        bottom:     -53.57 deg
        top:         42.00 deg
        horiz.:      93.86 deg
        vert.:       95.57 deg

    Right eye HAM mesh:
         original vertices: 52, triangles: 52
        optimized vertices: 52, n-gons: 2
                 mesh area: 14.11 %

    Right eye to head transformation matrix:
        [[ 1.      ,  0.      ,  0.      ,  0.032587],
         [ 0.      ,  1.      ,  0.      ,  0.      ],
         [ 0.      ,  0.      ,  1.      ,  0.      ]]

    Right eye raw LRBT values:
        left:        -0.839100
        right:        1.376382
        bottom:      -1.376382
        top:          0.900404

    Right eye render description:
        distorted viewport: [[1376, 0], [1376, 1472]]
        pixels per tan:     [968.74, 971.56]
        HMD to eye pose:
            position:    [0.032587, 0.0000, 0.0000]
            orientation: [0, 0, 0, 1]

    Right eye head FOV:
        left:       -39.86 deg
        right:       54.00 deg
        bottom:     -53.57 deg
        top:         42.00 deg
        horiz.:      93.86 deg
        vert.:       95.57 deg

    Total FOV:
        horizontal: 108.00 deg
        vertical:    95.57 deg
        diagonal:   111.24 deg
        overlap:     79.72 deg

    View geometry:
        left view rotation:     0.0 deg
        right view rotation:    0.0 deg
        reported IPD:          65.2 mm


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
[![Oculus Meta Quest Pro (72Hz) - top view](../images/MetaQuestPro_Native_R72_top.dmx.png)](../images/MetaQuestPro_Native_R72_top.dmx.png)

### Left view
[![Oculus Meta Quest Pro (72Hz) - left view](../images/MetaQuestPro_Native_R72_left.dmx.png)](../images/MetaQuestPro_Native_R72_left.dmx.png)

### Back view
[![Oculus Meta Quest Pro (72Hz) - back view](../images/MetaQuestPro_Native_R72_back.dmx.png)](../images/MetaQuestPro_Native_R72_back.dmx.png)

### Full view
[![Oculus Meta Quest Pro (72Hz) - full view](../images/MetaQuestPro_Native_R72_over.dmx.png)](../images/MetaQuestPro_Native_R72_over.dmx.png)

