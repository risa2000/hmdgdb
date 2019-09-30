---
title: Contributing
---

# Contributing

The data in the database are collected by volunteers, who own the headsets in
question, by using [`hmdq`
tool](https://github.com/risa2000/hmdq/releases/latest). Then they pass the
data (which are saved in a JSON file) to me and I update the database. If you
would like to help by providing data from your headset, you will need:

* OpenVR/SteamVR compatible headset,
* Windows 10, 64-bit (not tested, but may work on Windows 7/8 64-bit)

then please follow this procedure:

* First check if your headset is already in the database. If it is, there might
  still be a good reason to submit a new data, but you could only find this out
  after proceeding with the following steps. The good reasons to provide the
  new data:
  * Your data are significantly newer than what is stored in the database
    (check the "Timestamp" in the Geometry listing on the configuration page of
    the particular headset).
  * Your data are significantly different from what is stored in the database. 
* Download the latest version of the `hmdq` tool from
  [here](https://github.com/risa2000/hmdq/releases/latest).
* Activate your headset (if it needs any activation) and start SteamVR.
* Change the settings related to the _recommended render target resolution_ to
  their default values:
  * In SteamVR change the supersampling factor to 100%.
  * If you are using a Pimax headset set also PiTool Rendering Quality to 1.0.
* Run `hmdq` from the command line (console) by using this command:
```
hmdq -n --out_json <model_name_config_ipd_etc>.json
```
Differentiate the file name by the configuration options if there are any
(parallel projection, FOV, IPD, etc.).

* `-n` parameter will anonymize the serial numbers in the output data, and
* `--out_json` will save the data into a JSON file. This is a text file so you
  can review it easily in any text editor.

If you have a headset which allows an IPD adjustment (either mechanical or in
software), I would like to ask you to run the above steps for the minimal and
the maximal IPD setting your headset supports. It may turn out that the data
will be exactly the same (and they usually are), but without actually testing
it we cannot tell.

Then [send me](contact.md) the files.
