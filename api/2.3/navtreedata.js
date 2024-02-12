/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "OGRE", "index.html", [
    [ "API Reference Start Page", "index.html", "index" ],
    [ "Manual", "manual.html", [
      [ "Ogre Next Samples (Feature demonstrations)", "_samples.html", [
        [ "Showcase: Forward3D", "_samples.html#forward3d", null ],
        [ "Showcase: HDR", "_samples.html#hdr", null ],
        [ "Showcase: HDR/SMAA", "_samples.html#hdrsmaa", null ],
        [ "Showcase: PBS Materials", "_samples.html#pbsmaterials", null ],
        [ "Showcase: Post Processing", "_samples.html#postprocessing", null ],
        [ "API Usage: Animation tag points", "_samples.html#animationtagpoints", null ],
        [ "API Usage: Area Light Approximation", "_samples.html#arealighapprox", null ],
        [ "API Usage: Custom Renderable", "_samples.html#customrenderable", null ],
        [ "API Usage: Decals", "_samples.html#decals", null ],
        [ "API Usage: Dynamic Geometry", "_samples.html#dynamicgeometry", null ],
        [ "API Usage: IES Photometric Profiles", "_samples.html#iesprofiles", null ],
        [ "API Usage: Shared Skeleton", "_samples.html#sharedskeleton", null ],
        [ "API Usage: Instanced Stereo", "_samples.html#instancedstero", null ],
        [ "API Usage: Instant Radiosity", "_samples.html#instantradiosity", null ],
        [ "API Usage: Local Reflections Using Parallax Corrected Cubemaps", "_samples.html#localcubemaps", null ],
        [ "API Usage: Local Reflections Using Parallax Corrected Cubemaps With Manual Probes", "_samples.html#localcubemapsmp", null ],
        [ "API Usage: Automatic LOD Generation", "_samples.html#autolod", null ],
        [ "API Usage: Morph Animations", "_samples.html#morphanimation", null ],
        [ "API Usage: Automatically Placed Parallax Corrected Cubemap Probes Via PccPerPixelGridPlacement", "_samples.html#autopcc", null ],
        [ "API Usage: Planar Reflections", "_samples.html#planarreflections", null ],
        [ "API Usage: Refractions", "_samples.html#refractions", null ],
        [ "API Usage: SceneFormat Export / Import Sample", "_samples.html#sceneformat", null ],
        [ "API Usage: Screen Space Reflections", "_samples.html#ssreflections", null ],
        [ "API Usage: Shadow Map Debugging", "_samples.html#shadowdebug", null ],
        [ "API Usage: Shadow Map From Code", "_samples.html#shadowfromcode", null ],
        [ "API Usage: Static Shadow Map", "_samples.html#staticshadowmap", null ],
        [ "API Usage: Stencil Test", "_samples.html#stenciltest", null ],
        [ "API Usage: Stereo Rendering", "_samples.html#stereorendering", null ],
        [ "API Usage: Updating Decals And Area Lights' Textures", "_samples.html#updatedecal", null ],
        [ "API Usage: Ogre V1 Interfaces", "_samples.html#v1interface", null ],
        [ "API Usage: Ogre Next Manual Object", "_samples.html#onmanualobject", null ],
        [ "API Usage: Ogre Next V2 Meshes", "_samples.html#v2Mesh", null ],
        [ "Tutorial: Tutorial 00 - Basic", "_samples.html#tutorial00", null ],
        [ "Tutorial: Tutorial 01 - Initialisation", "_samples.html#tutorial01", null ],
        [ "Tutorial: Tutorial 02 - Variable Framerate", "_samples.html#tutorial02", null ],
        [ "Tutorial: Tutorial 03 - Deterministic Loop", "_samples.html#tutorial03", null ],
        [ "Tutorial: Tutorial 04 - Interpolation Loop", "_samples.html#tutorial04", null ],
        [ "Tutorial: Tutorial 05 - Multithreading Basics", "_samples.html#tutorial05", null ],
        [ "Tutorial: Tutorial 06 - Multithreading", "_samples.html#tutorial06", null ],
        [ "Tutorial: Compute 01 - UAV Textures", "_samples.html#compute01", null ],
        [ "Tutorial: Compute 02 - UAV Buffers", "_samples.html#compute02", null ],
        [ "Tutorial: Distortion", "_samples.html#tut_distortion", null ],
        [ "Tutorial: Dynamic Cube Map", "_samples.html#dyncubemap", null ],
        [ "Tutorial: EGL Headless", "_samples.html#eglheadless", null ],
        [ "Tutorial: Open VR", "_samples.html#openVR", null ],
        [ "Tutorial: Reconstructing Position From Depth", "_samples.html#reconpfromd", null ],
        [ "Tutorial: Rendering Sky As A Postprocess With A Single Shader", "_samples.html#skypost", null ],
        [ "Tutorial: SMAA", "_samples.html#SMAA", null ],
        [ "Tutorial: SSAO", "_samples.html#ssao", null ],
        [ "Tutorial: Terra Terrain", "_samples.html#terrain", null ],
        [ "Tutorial: Texture Baking", "_samples.html#texturebaking", null ],
        [ "Tutorial: UAV Setup 1 Example", "_samples.html#uav1", null ],
        [ "Tutorial: UAV Setup 2 Example", "_samples.html#uav2", null ]
      ] ],
      [ "Changes: Objects, Scene & Nodes", "_ogre20_changes.html", [
        [ "Names are now optional", "_ogre20_changes.html#NamesAreNowOptional", null ],
        [ "How to debug MovableObjects' (and Nodes) data", "_ogre20_changes.html#HowToDebugMovableObjectsData", [
          [ "Interpreting ArrayVector3", "_ogre20_changes.html#InterpretingArrayVector3", null ],
          [ "Dummy pointers instead of NULL", "_ogre20_changes.html#DummyPointers", null ]
        ] ],
        [ "Attachment and Visibility", "_ogre20_changes.html#AttachmentAndVisibility", null ],
        [ "Attaching/Detaching is more expensive than hiding", "_ogre20_changes.html#AttachingDetachingIsMoreExpensive", null ],
        [ "All MovableObjects require a SceneNode (Lights & Cameras)", "_ogre20_changes.html#AllMovableObjectsRequireSceneNode", null ],
        [ "Obtaining derived transforms", "_ogre20_changes.html#DerivedTransforms", null ],
        [ "SCENE_STATIC and SCENE_DYNAMIC", "_ogre20_changes.html#SceneStaticSceneDynamic", [
          [ "What means a Node to be SCENE_STATIC", "_ogre20_changes.html#SceneStaticNode", null ],
          [ "What means a Entities (and InstancedEntities) to be SCENE_STATIC", "_ogre20_changes.html#SceneStaticEntities", null ],
          [ "General", "_ogre20_changes.html#SceneStaticGeneral", null ]
        ] ],
        [ "Ogre asserts mCachedAabbOutOfDate or mCachedTransformOutOfDate while in debug mode", "_ogre20_changes.html#AssersionCachedOutOfDate", null ],
        [ "Custom classes derived from Renderable or MovableObject", "_ogre20_changes.html#DerivingRenderable", null ],
        [ "How do I get the vertex information from the new v2 Mesh classes?", "_ogre20_changes.html#V2MeshInformation", null ],
        [ "How do I set the element offsets, vertex buffer's source and index?", "_ogre20_changes.html#V2MeshElementOffset", null ],
        [ "My scene looks too dark or dull!", "_ogre20_changes.html#SceneLooksDarkDull", null ],
        [ "I activated gamma correction, but now my GUI textures look washed out!", "_ogre20_changes.html#GUIWashedOut", null ]
      ] ],
      [ "Technical Overview", "_technical_overview.html", [
        [ "Overview", "_technical_overview.html#TechnicalOverviewOverview", [
          [ "SIMD Coherence", "_technical_overview.html#SIMDCoherence", null ]
        ] ],
        [ "Memory Managers usage patterns", "_technical_overview.html#MemoryManagerUsagePatterns", [
          [ "Cleanups", "_technical_overview.html#MemoryManagerCleanups", null ]
        ] ],
        [ "Memory preallocation", "_technical_overview.html#MemoryPreallocation", null ],
        [ "Configuring memory managers", "_technical_overview.html#ConfiguringMemoryManagers", null ],
        [ "Where is RenderTarget::update? Why do I get errors in Viewport?", "_technical_overview.html#RenderTargetUpdate", null ],
        [ "Porting from 1.x to 2.0", "_technical_overview.html#PortingV1ToV2", null ],
        [ "Porting from 2.0 to 2.1", "_technical_overview.html#PortingV20ToV21", null ]
      ] ],
      [ "Compositor", "compositor.html", [
        [ "Nodes", "compositor.html#CompositorNodes", [
          [ "Input & output channels and RTTs", "compositor.html#CompositorNodesChannelsAndRTTs", [
            [ "Locally declared textures", "compositor.html#CompositorNodesChannelsAndRTTsLocalTextures", null ],
            [ "It comes from an input channel", "compositor.html#CompositorNodesChannelsAndRTTsFromInputChannel", null ],
            [ "It is a global texture", "compositor.html#CompositorNodesChannelsAndRTTsGlobal", null ],
            [ "Main RenderTarget", "compositor.html#CompositorNodesChannelsAndRTTsMainRenderTarget", null ]
          ] ],
          [ "Target", "compositor.html#CompositorNodesTarget", null ],
          [ "Passes", "compositor.html#CompositorNodesPasses", [
            [ "clear", "compositor.html#CompositorNodesPassesClear", null ],
            [ "generate_mipmaps", "compositor.html#CompositorNodesPassesGenerateMipmaps", null ],
            [ "quad", "compositor.html#CompositorNodesPassesQuad", null ],
            [ "resolve", "compositor.html#CompositorNodesPassesResolve", null ],
            [ "render_scene", "compositor.html#CompositorNodesPassesRenderScene", null ],
            [ "shadows", "compositor.html#CompositorNodesPassesShadows", null ],
            [ "stencil", "compositor.html#CompositorNodesPassesStencil", null ],
            [ "uav_queue", "compositor.html#CompositorNodesPassesUavQueue", [
              [ "Synchronization", "compositor.html#CompositorNodesPassesUavQueueSync", null ]
            ] ],
            [ "compute", "compositor.html#CompositorNodesPassesCompute", null ]
          ] ],
          [ "Textures", "compositor.html#CompositorNodesTextures", [
            [ "MSAA: Explicit vs Implicit resolves", "compositor.html#CompositorNodesTexturesMsaa", [
              [ "Implicit resolves", "compositor.html#CompositorNodesTexturesMsaaImplicit", null ],
              [ "Explicit resolves", "compositor.html#CompositorNodesTexturesMsaaExplicit", null ],
              [ "Resources", "compositor.html#CompositorNodesTexturesMsaaResources", null ]
            ] ],
            [ "Depth Textures", "compositor.html#CompositorNodesTexturesDepth", null ]
          ] ]
        ] ],
        [ "Shadow Nodes", "compositor.html#CompositorShadowNodes", [
          [ "Setting up shadow nodes", "compositor.html#CompositorShadowNodesSetup", null ],
          [ "Example", "compositor.html#CompositorShadowNodesExample", null ],
          [ "Shadow map atlas & Point Lights", "compositor.html#CompositorShadowNodesAtlasAndPointLights", null ],
          [ "Reuse, recalculate and first", "compositor.html#CompositorShadowNodesReuseEtc", null ],
          [ "Shadow mapping setup types", "compositor.html#CompositorShadowNodesTypes", [
            [ "Uniform shadow mapping", "compositor.html#CompositorShadowNodesTypesUniform", null ],
            [ "Focused", "compositor.html#CompositorShadowNodesTypesFocused", null ],
            [ "PSSM / CSM", "compositor.html#CompositorShadowNodesTypesPssm", null ],
            [ "Plane Optimal", "compositor.html#CompositorShadowNodesTypesPlaneOptimal", null ]
          ] ],
          [ "Writing shaders", "compositor.html#CompositorShadowNodesShaders", null ]
        ] ],
        [ "Workspaces", "compositor.html#CompositorWorkspaces", [
          [ "Data dependencies between nodes and circular dependencies", "compositor.html#CompositorWorkspacesDataDependencies", null ]
        ] ],
        [ "Setting up code", "compositor.html#CompositorSetupCode", [
          [ "Initializing the workspace", "compositor.html#CompositorWorkspacesSetupInitialize", null ],
          [ "Simple bootstrap for beginners", "compositor.html#CompositorWorkspacesSetupSimple", null ],
          [ "Advanced C++ users", "compositor.html#CompositorWorkspacesSetupAdvanced", null ]
        ] ],
        [ "Stereo and Split-Screen Rendering", "compositor.html#StereoAndSplitScreenRendering", [
          [ "Per-Workspace offset and scale", "compositor.html#CompositorWorkspacesStereoPerWorkspace", null ],
          [ "Viewport modifier mask", "compositor.html#CompositorWorkspacesStereoViewportMask", null ],
          [ "Execution mask", "compositor.html#CompositorWorkspacesStereoExecutionMask", null ],
          [ "Default values", "compositor.html#CompositorWorkspacesStereoDefaultValues", null ]
        ] ],
        [ "Advanced MSAA", "compositor.html#autotoc_md9", [
          [ "What is MSAA?", "compositor.html#autotoc_md10", [
            [ "Supersampling Antialiasing (SSAA) vs MSAA", "compositor.html#autotoc_md11", null ],
            [ "MSAA approach to the problem", "compositor.html#autotoc_md12", null ]
          ] ],
          [ "Ogre + MSAA with Implicit Resolves", "compositor.html#autotoc_md13", null ],
          [ "Ogre + MSAA with Explicit Resolves", "compositor.html#autotoc_md14", null ]
        ] ]
      ] ],
      [ "Global Illumination Methods", "_gi_methods.html", [
        [ "Ambient Lighting", "_gi_methods.html#GiAmbientLighting", [
          [ "Flat", "_gi_methods.html#GiAmbientLightingFlat", null ],
          [ "Hemisphere", "_gi_methods.html#GiAmbientLightingHemisphere", null ],
          [ "Spherical Harmonics", "_gi_methods.html#GiAmbientLightingSH", null ]
        ] ],
        [ "Parallax Corrected Cubemaps (PCC)", "_gi_methods.html#GiPCC", [
          [ "Auto PCC", "_gi_methods.html#GiPCCAuto", null ],
          [ "Manual PCC", "_gi_methods.html#GiPCCManual", null ]
        ] ],
        [ "Per Pixel PCC", "_gi_methods.html#GiPPPCC", [
          [ "PCC Per Pixel Grid Placement", "_gi_methods.html#GiPPGridPlacement", null ]
        ] ],
        [ "Instant Radiosity", "_gi_methods.html#GiInstantRadiosity", null ],
        [ "Irradiance Volume", "_gi_methods.html#GiIrradianceVolume", null ],
        [ "Voxel Cone Tracing (aka VCT)", "_gi_methods.html#GiVCT", [
          [ "VCT + Per Pixel PCC Hybrid", "_gi_methods.html#GiVCTPlusPPPCC", null ]
        ] ],
        [ "Irradiance Field with Depth (IFD)", "_gi_methods.html#GiIFD", null ],
        [ "Cascaded Image Voxel Cone Tracing (CIVCT)", "_gi_methods.html#GiCIVCT", null ],
        [ "What technique should I choose?", "_gi_methods.html#GiWhatTechniqueChoose", null ],
        [ "Image Voxel Cone Tracing", "_image_voxel_cone_tracing.html", [
          [ "Step 1: Image Voxelizer", "_image_voxel_cone_tracing.html#IVCT_Step1", [
            [ "Downside", "_image_voxel_cone_tracing.html#IVCT_Step1_Downside", [
              [ "Non-researched solutions:", "_image_voxel_cone_tracing.html#autotoc_md23", null ]
            ] ],
            [ "Trivia", "_image_voxel_cone_tracing.html#autotoc_md24", null ]
          ] ],
          [ "Step 2: Row Translation", "_image_voxel_cone_tracing.html#IVCT_Step2", null ],
          [ "Step 3: Cascades", "_image_voxel_cone_tracing.html#IVCT_Step3", null ],
          [ "Wait isn't this what UE5's Lumen does?", "_image_voxel_cone_tracing.html#autotoc_md25", null ],
          [ "Wait isn't this what Godot does?", "_image_voxel_cone_tracing.html#autotoc_md26", null ]
        ] ]
      ] ],
      [ "Image Voxel Cone Tracing", "_image_voxel_cone_tracing.html", [
        [ "Step 1: Image Voxelizer", "_image_voxel_cone_tracing.html#IVCT_Step1", [
          [ "Downside", "_image_voxel_cone_tracing.html#IVCT_Step1_Downside", [
            [ "Non-researched solutions:", "_image_voxel_cone_tracing.html#autotoc_md23", null ]
          ] ],
          [ "Trivia", "_image_voxel_cone_tracing.html#autotoc_md24", null ]
        ] ],
        [ "Step 2: Row Translation", "_image_voxel_cone_tracing.html#IVCT_Step2", null ],
        [ "Step 3: Cascades", "_image_voxel_cone_tracing.html#IVCT_Step3", null ],
        [ "Wait isn't this what UE5's Lumen does?", "_image_voxel_cone_tracing.html#autotoc_md25", null ],
        [ "Wait isn't this what Godot does?", "_image_voxel_cone_tracing.html#autotoc_md26", null ]
      ] ],
      [ "Instancing", "instancing.html", [
        [ "What is instancing?", "instancing.html#WhatIsInstancing", null ],
        [ "Instancing 101", "instancing.html#Instancing101", [
          [ "Instances per batch", "instancing.html#InstancesPerBatch", null ]
        ] ],
        [ "Techniques", "instancing.html#InstancingTechniques", [
          [ "ShaderBased", "instancing.html#InstancingTechniquesShaderBased", null ],
          [ "VTF (Software)", "instancing.html#InstancingTechniquesVTFSoftware", null ],
          [ "HW VTF", "instancing.html#InstancingTechniquesHWVTF", [
            [ "HW VTF LUT", "instancing.html#InstancingTechniquesHW", null ]
          ] ],
          [ "HW Basic", "instancing.html#InstancingTechniquesHWBasic", null ]
        ] ],
        [ "Custom parameters", "instancing.html#InstancingCustomParameters", null ],
        [ "Supporting multiple submeshes", "instancing.html#InstancingMultipleSubmeshes", null ],
        [ "Defragmenting batches", "instancing.html#InstancingDefragmentingBatches", [
          [ "What is batch fragmentation?", "instancing.html#InstancingDefragmentingBatchesIntro", null ],
          [ "Prevention: Avoiding fragmentation", "instancing.html#InstancingDefragmentingBatchesPrevention", null ],
          [ "Cure: Defragmenting on the fly", "instancing.html#InstancingDefragmentingBatchesOnTheFly", null ]
        ] ],
        [ "Troubleshooting", "instancing.html#InstancingTroubleshooting", null ]
      ] ],
      [ "Threading", "threading.html", [
        [ "Initializing", "threading.html#ThreadingInitializing", [
          [ "Ideal number of threads", "threading.html#ThreadingInitializingNumberOfThreads", null ],
          [ "More info about InstancingThreadedCullingMethod", "threading.html#ThreadingInitializingCullingMethod", null ]
        ] ],
        [ "What tasks are threaded in Ogre", "threading.html#ThreadingInOgre", null ],
        [ "Using Ogre's threading system for custom tasks", "threading.html#ThreadingCustomTasks", null ],
        [ "Thread safety of SceneNodes", "threading.html#ThreadSafetySceneNodes", null ]
      ] ],
      [ "Performance Hints", "performance.html", null ],
      [ "HLMS: High Level Material System", "hlms.html", [
        [ "Fundamental changes", "hlms.html#HlmsChanges", [
          [ "Viewports and Scissor tests", "hlms.html#HlmsChangesViewports", null ],
          [ "A lot of data is stored in \"Blocks\"", "hlms.html#HlmsChangesBlocks", null ],
          [ "Materials are still alive", "hlms.html#HlmsChangesMaterialsAlive", null ],
          [ "Fixed Function has been removed", "hlms.html#HlmsChangesFFP", null ]
        ] ],
        [ "The three components", "hlms.html#HlmsComponents", null ],
        [ "Blocks", "hlms.html#HlmsBlocks", [
          [ "Datablocks", "hlms.html#HlmsBlocksDatablocks", null ],
          [ "Macroblocks", "hlms.html#HlmsBlocksMacroblocks", null ],
          [ "Blendblocks", "hlms.html#HlmsBlocksBlendblocks", null ],
          [ "Samplerblocks", "hlms.html#HlmsBlocksSampleblocks", null ]
        ] ],
        [ "Hlms templates", "hlms.html#HlmsTemplates", null ],
        [ "The Hlms preprocessor", "hlms.html#HlmsPreprocessor", [
          [ "Preprocessor syntax", "hlms.html#HlmsPreprocessorSyntax", [
            [ "@property( expression )", "hlms.html#HlmsPreprocessorSyntaxProperty", null ],
            [ "@foreach( count, scopedVar, [start] )", "hlms.html#HlmsPreprocessorSyntaxForeach", null ],
            [ "@counter( variable )", "hlms.html#HlmsPreprocessorSyntaxCounter", null ],
            [ "@value( variable )", "hlms.html#HlmsPreprocessorSyntaxValue", null ],
            [ "@set add sub mul div mod min max", "hlms.html#HlmsPreprocessorSyntaxSetEtc", null ],
            [ "@piece( nameOfPiece )", "hlms.html#HlmsPreprocessorSyntaxPiece", null ],
            [ "@insertpiece( nameOfPiece )", "hlms.html#HlmsPreprocessorSyntaxInsertpiece", null ],
            [ "@undefpiece( nameOfPiece )", "hlms.html#HlmsPreprocessorSyntaxUndefpiece", null ],
            [ "@pset padd psub pmul pdiv pmod pmin pmax", "hlms.html#HlmsPreprocessorSyntaxPsetEtc", null ]
          ] ]
        ] ],
        [ "Creation of shaders", "hlms.html#HlmsCreationOfShaders", [
          [ "C++ interaction with shader templates", "hlms.html#HlmsCreationOfShadersCpp", null ],
          [ "Common conventions", "hlms.html#HlmsCreationOfShadersConventions", null ],
          [ "Hot reloading", "hlms.html#HlmsCreationOfShadersHotReloading", null ],
          [ "Disabling a stage", "hlms.html#HlmsCreationOfShadersDisablingStage", null ],
          [ "Customizing an existing implementation", "hlms.html#HlmsCreationOfShadersCustomizing", null ]
        ] ],
        [ "Run-time rendering", "hlms.html#HlmsRuntimeRendering", [
          [ "preparePassHash", "hlms.html#HlmsRuntimeRenderingPreparePassHash", null ],
          [ "fillBuffersFor", "hlms.html#HlmsRuntimeRenderingFillBuffersFor", null ]
        ] ],
        [ "Using the HLMS implementations", "hlms.html#UsingHlmsImplementation", [
          [ "Initialization", "hlms.html#UsingHlmsImplementationInitialization", null ],
          [ "Deinitialization", "hlms.html#UsingHlmsImplementationDeinitilization", null ],
          [ "Creating a datablock", "hlms.html#UsingHlmsImplementationCreatingDatablock", null ]
        ] ],
        [ "The Hlms Texture Manager", "hlms.html#HlmsTextureManager", [
          [ "Automatic batching", "hlms.html#HlmsTextureManagerAutomaticBatching", [
            [ "Texture types", "hlms.html#HlmsTextureManagerAutomaticBatchingTextureTypes", null ],
            [ "Automatic parameters", "hlms.html#HlmsTextureManagerAutomaticBatchingAutoParams", null ],
            [ "Loading a texture twice (i.e. with a different format) via aliasing", "hlms.html#HlmsTextureManagerAutomaticBatchingLoadingTwice", null ]
          ] ],
          [ "Manual: Texture packs", "hlms.html#HlmsTextureManagerTexturePacks", null ],
          [ "Watching out for memory consumption", "hlms.html#HlmsTextureManagerWatchOutMemory", [
            [ "Additional memory considerations", "hlms.html#HlmsTextureManagerWatchOutMemoryConsiderations", null ],
            [ "setWorkerThreadMinimumBudget warning", "hlms.html#setWorkerThreadMinimumBudget", null ]
          ] ]
        ] ],
        [ "Troubleshooting", "hlms.html#HlmsTroubleshooting", [
          [ "My shadows don't show up or are very glitchy", "hlms.html#HlmsTroubleshootingShadow", null ]
        ] ]
      ] ],
      [ "AZDO changes (Aproaching Zero Driver Overhead)", "azdo.html", [
        [ "V2 and v1 objects", "azdo.html#V2AndV1Objects", [
          [ "Longevity of the v1 objects and deprecation", "azdo.html#V2AndV1ObjectsV1Longevity", null ]
        ] ],
        [ "Render Queue", "azdo.html#RenderQueue", null ],
        [ "The VaoManager", "azdo.html#VaoMaanger", null ]
      ] ],
      [ "The Command Buffer", "commandbuffer.html", [
        [ "Adding a command", "commandbuffer.html#CommandBufferAddCommand", null ],
        [ "Structure of a command", "commandbuffer.html#CommandBufferCommandStructure", null ],
        [ "Execution table", "commandbuffer.html#CommandBufferExecutionTable", [
          [ "Hacks and Tricks", "commandbuffer.html#CommandBufferExecutionTableHacks", null ]
        ] ],
        [ "Post-processing the command buffer", "commandbuffer.html#CommandBufferPostProcessing", null ]
      ] ],
      [ "Terra System", "_terra_system.html", [
        [ "Vertex-bufferless rendering", "_terra_system.html#autotoc_md61", null ],
        [ "Vertex Trick in Terra", "_terra_system.html#autotoc_md62", null ],
        [ "Terra cells", "_terra_system.html#autotoc_md63", [
          [ "First layer, the 4x4 block", "_terra_system.html#autotoc_md64", null ],
          [ "Outer layers", "_terra_system.html#autotoc_md65", null ]
        ] ],
        [ "Skirts", "_terra_system.html#autotoc_md66", null ],
        [ "Shadows", "_terra_system.html#autotoc_md67", null ],
        [ "Shading", "_terra_system.html#autotoc_md68", null ],
        [ "Why is it not a component?", "_terra_system.html#autotoc_md69", null ]
      ] ],
      [ "Tunning memory consumption and resources", "_tuning_memory_resources.html", [
        [ "Grouping textures by type", "_tuning_memory_resources.html#GroupingTexturesByType", null ],
        [ "Dynamic vs Default buffers", "_tuning_memory_resources.html#DynamicVsDefaultBuffers", null ],
        [ "Tweaking default memory consumption by VaoManager", "_tuning_memory_resources.html#TweakingVaoManager", [
          [ "Vulkan and <tt>TEXTURES_OPTIMAL</tt>", "_tuning_memory_resources.html#autotoc_md27", null ]
        ] ]
      ] ],
      [ "What's new in Ogre 2.2", "_ogre22_changes.html", [
        [ "Load Store semantics", "_ogre22_changes.html#autotoc_md28", [
          [ "Now that we’ve explained how TBDRs work, we can explain load and store actions", "_ogre22_changes.html#autotoc_md29", null ]
        ] ],
        [ "More control over MSAA", "_ogre22_changes.html#autotoc_md30", null ],
        [ "Porting to Ogre 2.2 from 2.1", "_ogre22_changes.html#autotoc_md31", [
          [ "PixelFormats", "_ogre22_changes.html#autotoc_md32", [
            [ "Common pixel format equivalencies", "_ogre22_changes.html#autotoc_md33", null ]
          ] ],
          [ "Useful code snippets", "_ogre22_changes.html#autotoc_md34", [
            [ "Create a TextureGpu based on a file", "_ogre22_changes.html#autotoc_md35", null ],
            [ "Create a TextureGpu based that you manually fill", "_ogre22_changes.html#autotoc_md36", null ],
            [ "Uploading data to a TextureGpu", "_ogre22_changes.html#autotoc_md37", null ],
            [ "Upload streaming", "_ogre22_changes.html#autotoc_md38", null ],
            [ "Downloading data from TextureGpu into CPU", "_ogre22_changes.html#autotoc_md39", null ],
            [ "Downloading streaming", "_ogre22_changes.html#autotoc_md40", null ]
          ] ]
        ] ],
        [ "Difference between depth, numSlices and depthOrSlices", "_ogre22_changes.html#autotoc_md41", null ],
        [ "Memory layout of textures and images", "_ogre22_changes.html#autotoc_md42", null ],
        [ "Troubleshooting errors", "_ogre22_changes.html#autotoc_md43", null ],
        [ "RenderPassDescriptors", "_ogre22_changes.html#autotoc_md44", null ],
        [ "DescriptorSetTexture & co.", "_ogre22_changes.html#autotoc_md45", null ],
        [ "Does 2.2 interoperate well with the HLMS texture arrays?", "_ogre22_changes.html#autotoc_md46", null ],
        [ "Hlms porting", "_ogre22_changes.html#autotoc_md47", null ],
        [ "Things to watch out when porting", "_ogre22_changes.html#autotoc_md48", null ]
      ] ],
      [ "Behavor of StagingTexture in D3D11", "_behavor_staging_texture_d3_d11.html", [
        [ "Attempting to be contiguous", "_behavor_staging_texture_d3_d11.html#autotoc_md6", null ],
        [ "Slicing in 3", "_behavor_staging_texture_d3_d11.html#autotoc_md7", null ],
        [ "Slicing in the middle", "_behavor_staging_texture_d3_d11.html#autotoc_md8", null ]
      ] ],
      [ "What's new in Ogre 2.3", "_ogre23_changes.html", [
        [ "Switch importV1 to createByImportingV1", "_ogre23_changes.html#autotoc_md49", null ],
        [ "Shadow's Normal Offset Bias", "_ogre23_changes.html#autotoc_md50", null ],
        [ "Unlit vertex and pixel shaders unified", "_ogre23_changes.html#autotoc_md51", null ],
        [ "Added HlmsMacroblock::mDepthClamp", "_ogre23_changes.html#autotoc_md52", null ],
        [ "Added shadow pancaking", "_ogre23_changes.html#autotoc_md53", null ],
        [ "PluginOptional", "_ogre23_changes.html#autotoc_md54", null ],
        [ "Other relevant information when porting", "_ogre23_changes.html#autotoc_md55", [
          [ "Do not call notifyDataIsReady more than needed", "_ogre23_changes.html#autotoc_md56", null ],
          [ "Global changes for Vulkan compatibility:", "_ogre23_changes.html#autotoc_md57", null ]
        ] ]
      ] ],
      [ "Root Layouts", "_root_layouts.html", [
        [ "Old APIs (i.e. D3D11 and GL)", "_root_layouts.html#RootLayoutsOldAPIs", null ],
        [ "New APIs and Root Layouts", "_root_layouts.html#RootLayoutsNewAPIs", null ],
        [ "Setting up root layouts", "_root_layouts.html#RootLayoutsSettingUp", [
          [ "Could you have used e.g. \"const_buffers\" : [0,7] instead of [4,7]?", "_root_layouts.html#autotoc_md58", null ]
        ] ],
        [ "Declaring Root Layouts in shaders", "_root_layouts.html#RootLayoutsDeclaringInShaders", null ],
        [ "Baked sets", "_root_layouts.html#RootLayoutsBakedSets", null ],
        [ "Prefab Root Layouts for low level materials", "_root_layouts.html#RootLayoutPrefabs", null ],
        [ "Arrays of Textures", "_root_layouts.html#RootLayoutsArraysOfTextures", [
          [ "C++", "_root_layouts.html#RootLayoutsAoTCpp", null ],
          [ "Inline shader declaration", "_root_layouts.html#RootLayoutsAoTInlineShader", null ],
          [ "Automatic", "_root_layouts.html#RootLayoutsAoTAuto", null ],
          [ "Making GLSL shaders compatible with both Vulkan and OpenGL", "_root_layouts.html#RootLayoutsGLSLForGLandVK", [
            [ "Example:", "_root_layouts.html#RootLayoutsGLSLForGLandVKExample", [
              [ "OpenGL", "_root_layouts.html#autotoc_md59", null ],
              [ "Vulkan", "_root_layouts.html#autotoc_md60", null ]
            ] ]
          ] ]
        ] ]
      ] ]
    ] ],
    [ "Setting Up Ogre", "_setting_up_ogre.html", [
      [ "Windows", "_setting_up_ogre_windows.html", [
        [ "Requirements", "_setting_up_ogre_windows.html#RequirementsWindows", null ],
        [ "Downloading Ogre", "_setting_up_ogre_windows.html#DownloadingOgreWindows", null ],
        [ "Building Dependencies", "_setting_up_ogre_windows.html#BuildingDependenciesWindows", null ],
        [ "Building Ogre", "_setting_up_ogre_windows.html#BuildingOgreWindows", null ]
      ] ],
      [ "Linux", "_setting_up_ogre_linux.html", [
        [ "Requirements", "_setting_up_ogre_linux.html#RequirementsLinux", null ],
        [ "Downloading Ogre", "_setting_up_ogre_linux.html#DownloadingOgreLinux", null ],
        [ "Building Dependencies", "_setting_up_ogre_linux.html#BuildingDependenciesLinux", null ],
        [ "Building Ogre", "_setting_up_ogre_linux.html#BuildingOgreLinux", null ],
        [ "Setting Up Ogre with QtCreator", "_setting_up_ogre_linux.html#SettingUpOgreWithQtCreatorLinux", null ]
      ] ],
      [ "iOS", "_setting_up_ogre_i_o_s.html", [
        [ "Requirements", "_setting_up_ogre_i_o_s.html#Requirements_iOS", null ],
        [ "Downloading Ogre", "_setting_up_ogre_i_o_s.html#DownloadingOgre_iOS", null ],
        [ "Building Ogre", "_setting_up_ogre_i_o_s.html#BuildingOgre_iOS", null ]
      ] ],
      [ "macOS", "_setting_up_ogre_mac_o_s.html", [
        [ "Install cmake", "_setting_up_ogre_mac_o_s.html#autotoc_md70", null ],
        [ "Install dependencies", "_setting_up_ogre_mac_o_s.html#autotoc_md71", [
          [ "Install SDL2 using brew", "_setting_up_ogre_mac_o_s.html#autotoc_md72", null ]
        ] ],
        [ "Build Ogre", "_setting_up_ogre_mac_o_s.html#autotoc_md73", null ],
        [ "Build offline version of the docs", "_setting_up_ogre_mac_o_s.html#autotoc_md74", null ]
      ] ],
      [ "Android", "_setting_up_ogre_android.html", [
        [ "Requirements", "_setting_up_ogre_android.html#RequirementsAndroid", null ],
        [ "Downloading and building Ogre", "_setting_up_ogre_android.html#DownloadingOgreAndroid", null ],
        [ "Building Samples", "_setting_up_ogre_android.html#BuildingSamplesAndroid", null ]
      ] ]
    ] ],
    [ "Using Ogre in your App", "_using_ogre_in_your_app.html", [
      [ "Overview", "_using_ogre_in_your_app.html#UsingOgreInYourAppOverview", null ],
      [ "Speeding things up", "_using_ogre_in_your_app.html#SpeedingThingsUp", [
        [ "Small note about iOS", "_using_ogre_in_your_app.html#SmallNoteAbout_iOS", null ],
        [ "Apple specific", "_using_ogre_in_your_app.html#autotoc_md76", null ],
        [ "Creating your application with 'EmptyProject' script", "_using_ogre_in_your_app.html#CreatingYourApplication", [
          [ "A note about copied files from Samples/2.0/Common", "_using_ogre_in_your_app.html#AnoteaboutcopiedfilesfromSamples_20_Common", null ]
        ] ],
        [ "Supporting Multithreading loops from the get go", "_using_ogre_in_your_app.html#SupportingMultithreadingLoopsFromTheGetGo", null ]
      ] ]
    ] ],
    [ "Deprecated List", "deprecated.html", null ],
    [ "Topics", "topics.html", "topics" ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", "namespacemembers_dup" ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", "namespacemembers_type" ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", "namespacemembers_eval" ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", "functions_type" ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", "functions_eval" ],
        [ "Properties", "functions_prop.html", null ],
        [ "Related Symbols", "functions_rela.html", "functions_rela" ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", null ],
        [ "Macros", "globals_defs.html", "globals_defs" ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"_android_2_ogre_config_dialog_imp_8h.html",
"_ogre_buffer_packed_8h.html#a447e51d7625af79716667cebcfa6da57",
"_ogre_d3_d11_pixel_format_to_shader_type_8h.html#a320bd6a6b273a3abe76add6b64ff8540a64978914a6898c4840c1c4788f7a2a79",
"_ogre_g_l_e_s2_f_b_o_render_texture_8h.html",
"_ogre_hlms_pbs_mobile_prerequisites_8h.html#a342a992a9d37255505fc5fbb7f0584d9a2b63ae42d26ac848a3c13e34f2b98e91",
"_ogre_metal_pixel_format_to_shader_type_8h.html#a320bd6a6b273a3abe76add6b64ff8540a64978914a6898c4840c1c4788f7a2a79",
"_ogre_platform_8h.html#a8515e97868bc6f57d45684fe5cffaf46",
"_ogre_render_target_listener_8h.html",
"_ogre_texture_filters_8h.html",
"_ogre_thread_defines_t_b_b_8h.html#ace4a3180018d84c5295b17251233abfb",
"_ogre_vulkan_utils_8h.html#a439278da9ec600ca236ce06ce5007657",
"_w_i_n32_2_ogre_error_dialog_imp_8h.html#ac7bef5d85e3dcd73eef56ad39ffc84a9",
"class_ogre_1_1_allocated_object.html#a595ea4c05da8aa987d3800e65d23355d",
"class_ogre_1_1_android_e_g_l_window.html#a75261d46e5f123e31ab4f889b8788e5f",
"class_ogre_1_1_animation_controller_function.html#a4f3ff1b57eba7e774d10b833273ec137",
"class_ogre_1_1_anti_portal.html#ad66149b7a6f5ba1cd5c58fbd69f0446a",
"class_ogre_1_1_area_emitter.html#a334b3e2619d23844739a29bcad603e00",
"class_ogre_1_1_array_matrix4.html",
"class_ogre_1_1_array_ray.html#a9388d8ae147479be1923e9047e0cdebb",
"class_ogre_1_1_async_texture_ticket.html#a45ecf267d33f2105fe425c792e554aa4",
"class_ogre_1_1_auto_param_data_source.html#ab3e18653febc81aa751f7109ea43d5bb",
"class_ogre_1_1_bone.html#a701afdce7ebabf66d52eb0220140f06d",
"class_ogre_1_1_box_emitter.html#a9194f48e306289c7f3c7f77374febb01",
"class_ogre_1_1_bsp_level.html#a3af26f716731b64850ea50cfa4d2edef",
"class_ogre_1_1_bsp_resource_manager.html#a2883e5999ded4031bd421fc5d045aaf7",
"class_ogre_1_1_bsp_scene_manager.html#a3dc2f4478ab8741bdcf02c9008ef7809",
"class_ogre_1_1_bsp_scene_manager.html#a9d2789c7eea005fd7c63b3ee3b850617",
"class_ogre_1_1_bsp_scene_manager_factory.html#ad1f1a983f9e2dfddee802c47bb0b1ca9",
"class_ogre_1_1_bsp_scene_node.html#acc33f0b8cc5bbfed3c12611d89f1dd46",
"class_ogre_1_1_camera.html#a0281473f02016c125a510520f0f9d44c",
"class_ogre_1_1_camera.html#a6b0e4f7b871eca1c11097e50780cf6be",
"class_ogre_1_1_camera.html#ad563191e86e4d119c62ea9acfc2a90d5",
"class_ogre_1_1_cocoa_window.html#a9a30c9f34f61a0b5ad6e2b97be37e480",
"class_ogre_1_1_colour_fader_affector2.html#ada47d8c763bad05261f7ed8234008609",
"class_ogre_1_1_colour_interpolator_affector.html#a63fc6bdc2eb6aeac24898a77ec5e2023",
"class_ogre_1_1_compositor_manager2.html",
"class_ogre_1_1_compositor_pass.html#a220924c4a37f7cf458646522bc5cc72f",
"class_ogre_1_1_compositor_pass_depth_copy.html#a63fc6bdc2eb6aeac24898a77ec5e2023",
"class_ogre_1_1_compositor_pass_provider.html#abcb0e0006a30c29f4df718365b97d6b9",
"class_ogre_1_1_compositor_pass_shadows.html#adce32528577d71b228692df906ecd17c",
"class_ogre_1_1_compositor_pass_uav.html#ad1f1a983f9e2dfddee802c47bb0b1ca9",
"class_ogre_1_1_compositor_shadow_node_def.html#ab422c67a2c8844f410fe822a357cba3b",
"class_ogre_1_1_compositor_workspace_translator.html",
"class_ogre_1_1_const_map_iterator.html#a22c1c22fab97253a922a190d2ace205e",
"class_ogre_1_1_cubemap_probe.html#a4b7e5733de16df87f04f5a8db4017503",
"class_ogre_1_1_cylinder_emitter.html#ac9741b2623435c312819c9d3903c915e",
"class_ogre_1_1_d3_d11_buffer_interface_base.html#a11a3bbfbd333ffe5d276c51ce7dcfe60",
"class_ogre_1_1_d3_d11_depth_buffer.html#ae5095fe367bf95d08dee2da03810beb2",
"class_ogre_1_1_d3_d11_depth_texture.html#ae229b1f58092109adef55bfc6f864d79",
"class_ogre_1_1_d3_d11_device.html#aa55de85d75c8371d7b715c4587dc3d03",
"class_ogre_1_1_d3_d11_gpu_program_manager.html#af96b58b31c152a8ae3c6152ee3ea12e7",
"class_ogre_1_1_d3_d11_h_l_s_l_program.html#ac2413285a4ce23815075691179c17740",
"class_ogre_1_1_d3_d11_multi_render_target.html#a279914cf4611a750e94b6fb54bc1b2d1",
"class_ogre_1_1_d3_d11_null_texture.html#a5513ffce404b14cff72846318b018d32",
"class_ogre_1_1_d3_d11_null_texture_target.html#a845563eb22df3c82a7320ad4a65f75f7",
"class_ogre_1_1_d3_d11_render_pass_descriptor.html#ae003dc630410b352f3e14668b7938254a53ddfa19b2fe9f5261f0abf3e862e05a",
"class_ogre_1_1_d3_d11_render_system.html#a7e50f9245426bfd78b0422fb899dfb26",
"class_ogre_1_1_d3_d11_render_texture.html#a1799514a8ad7958919ca48c654a47e8e",
"class_ogre_1_1_d3_d11_render_window_base.html#a7e440c42e7a0012113dfbec561be84c2",
"class_ogre_1_1_d3_d11_render_window_swap_chain_based.html#aa7cc305c539f37039f79fc90175c4091",
"class_ogre_1_1_d3_d11_stereo_driver_bridge.html#acc6cf0e5a59efb6418280d8e4107ca5f",
"class_ogre_1_1_d3_d11_texture.html#a3af26f716731b64850ea50cfa4d2edef",
"class_ogre_1_1_d3_d11_texture_gpu.html#a529bc39128cc173557a2742b7278c400",
"class_ogre_1_1_d3_d11_texture_gpu_manager.html#afe11bd546cf7315f4526488e7078cc7d",
"class_ogre_1_1_d3_d11_texture_gpu_render_target.html#af3e85ec353d2f79da71c96ad69b4048a",
"class_ogre_1_1_d3_d11_texture_gpu_window.html#af3e85ec353d2f79da71c96ad69b4048a",
"class_ogre_1_1_d3_d11_uav_buffer_packed.html#adce32528577d71b228692df906ecd17c",
"class_ogre_1_1_d3_d11_window.html#a70cfe4412cfa68a9423854fc1b19872e",
"class_ogre_1_1_d3_d9_depth_buffer.html#a9854c57374adef41216bae68544a5b7eac3e2a2eeb9d97edbf973e52499d190ec",
"class_ogre_1_1_d3_d9_driver_list.html#acb46d4b0a597156d9ba5abc39d127792",
"class_ogre_1_1_d3_d9_gpu_fragment_program.html#af0be69f3df55f71c0bded2e36c89dfa6",
"class_ogre_1_1_d3_d9_gpu_program.html#ae4d9c0afca2284a5e0972bdf8b6ff543",
"class_ogre_1_1_d3_d9_gpu_vertex_program.html#a104d9db8bfcff1f37b29157bbe070f7a",
"class_ogre_1_1_d3_d9_h_l_s_l_program.html#a07e619aa09d3bc6789a6667cb4fc572cab43c913411f4a96722902f17b88f10fb",
"class_ogre_1_1_d3_d9_h_l_s_l_program.html#afb3b402c2bd87241680ed955eb924d1b",
"class_ogre_1_1_d3_d9_mappings.html#a013e603712b5d552f59c4557c3bcff6fa327bf2d9e6d806eb547a2798bc89d389",
"class_ogre_1_1_d3_d9_plugin.html#a1c727e879a260c37b00ce5505fe8e144",
"class_ogre_1_1_d3_d9_render_system.html#a659cb3dfd72379833b0b4898d99f9a48",
"class_ogre_1_1_d3_d9_render_system.html#ad1f1a983f9e2dfddee802c47bb0b1ca9",
"class_ogre_1_1_d3_d9_render_texture.html#aed1464ac3de21ff20db8f9f1f8608dc7",
"class_ogre_1_1_d3_d9_resource.html#a1ecf872a0653d44f6078a57a17fd9eea",
"class_ogre_1_1_d3_d9_texture.html#a1686b8aef3b2c8d3892ae453086073c4",
"class_ogre_1_1_d3_d9_texture_manager.html#a4173c940f4c67e8a2dc1a5c4b6de62f6",
"class_ogre_1_1_d_d_s_codec2.html#a21f4b8a16d070793d576f827c9fee218",
"class_ogre_1_1_decal.html#acb46d4b0a597156d9ba5abc39d127792",
"class_ogre_1_1_default_plane_bounded_volume_list_scene_query.html#a0a75b5ed976da2f9023382f4c4514b3aa018493b6c87271e0c8ba014f058cffd3",
"class_ogre_1_1_default_scene_manager.html#a25cc1bb36997b722fc60efc7903f3760",
"class_ogre_1_1_default_scene_manager.html#a8d29d1e2d954090ce2fba768b7f30c02",
"class_ogre_1_1_default_scene_manager.html#af7bc9d19d31025a52fd76389066ab418",
"class_ogre_1_1_default_work_queue.html#aca9fadb9513b1c44286aeb857615a18f",
"class_ogre_1_1_deflate_stream.html#a86d2ff5dff63ce4b689dd1d486d3243f",
"class_ogre_1_1_direction_randomiser_affector.html#a58131e1318fa73bb9a847de9e1023662",
"class_ogre_1_1_e_g_l_context.html#aa7b87d8031a667931b402d8f96346da8",
"class_ogre_1_1_e_g_l_window.html#a629ce6c74ec3b4b565ce5b85a98e0482",
"class_ogre_1_1_e_x_r_codec.html#a60f445cc6919df56af6611fd14eec47d",
"class_ogre_1_1_ellipsoid_emitter.html#a1c17e03466492e1983a439eb7e540e25",
"class_ogre_1_1_emitter_commands_1_1_cmd_angle.html",
"class_ogre_1_1_emscripten_e_g_l_window.html#a0411214c1513cf32e55edc5be3008ec0",
"class_ogre_1_1_emscripten_e_g_l_window.html#adbbd72029c251bbf13f33c74e8a702be",
"class_ogre_1_1_file_handle_data_stream.html#a8357fe4fb4849772b94baa4bf47c7ded",
"class_ogre_1_1_font.html#a2184210a132f13a445a267165d571e19",
"class_ogre_1_1_forward_plus_base.html#a54d3176e902cf75c4a8e56f2e3f89485",
"class_ogre_1_1_frustum.html#a873d1d3e984568fae7b5a4dcdfb40e90",
"class_ogre_1_1_g_l3_plus_buffer_interface.html#aeff0561242b65e254e4db45263200fba",
"class_ogre_1_1_g_l3_plus_depth_texture.html#a07e619aa09d3bc6789a6667cb4fc572ca4228d390b3a9ed614001db177d1f441e",
"class_ogre_1_1_g_l3_plus_depth_texture_target.html#a17cd47f6a00ab31d494888beccde6cc2",
"class_ogre_1_1_g_l3_plus_f_b_o_multi_render_target.html#a4abd57c683abf6d69d87486356f47d2e",
"class_ogre_1_1_g_l3_plus_f_b_o_render_texture.html#ab2133478c53c874dcad98a877393260b",
"class_ogre_1_1_g_l3_plus_null_texture.html#a74138c0203835513613af73cdb08890d",
"class_ogre_1_1_g_l3_plus_null_texture_target.html#ad1f1a983f9e2dfddee802c47bb0b1ca9",
"class_ogre_1_1_g_l3_plus_read_only_tex_buffer_packed.html#a63fc6bdc2eb6aeac24898a77ec5e2023",
"class_ogre_1_1_g_l3_plus_render_system.html#a20ef2d587957ef999a1ecb8459f3db36",
"class_ogre_1_1_g_l3_plus_render_system.html#aa9f16b55f9c4ec84f634bc87e8467358",
"class_ogre_1_1_g_l3_plus_render_texture.html#a97b2d63554ec8e515789ac65c6200a33",
"class_ogre_1_1_g_l3_plus_tex_buffer_emulated_packed.html#a162e23ff6f3cb7f90ed129d3906c14e4",
"class_ogre_1_1_g_l3_plus_texture.html#a3d111616339484f39c9456eeec6fd843",
"class_ogre_1_1_g_l3_plus_texture_gpu.html#a57c6e78baed76ebbde12a2061b35ab16",
"class_ogre_1_1_g_l3_plus_texture_gpu_headless_window.html#a5f76858facbfe1833178af802576cd33",
"class_ogre_1_1_g_l3_plus_texture_gpu_render_target.html#a089625f3d76ac5040973e36e3ae2c72d",
"class_ogre_1_1_g_l3_plus_texture_gpu_window.html#a13609621515188959fde2257be92ac4b",
"class_ogre_1_1_g_l3_plus_texture_manager.html#a3b27a21f192919d78c14bccea5184736",
"class_ogre_1_1_g_l3_plus_vao_manager.html#a445b8e5486e061745af43d1831f60eb6",
"class_ogre_1_1_g_l_e_s2_const_buffer_packed.html#adca6c54b52f496e6c4a65da39053d858",
"class_ogre_1_1_g_l_e_s2_depth_texture_target.html#a6869b8220e7a7b3c85579e57e13bc350",
"class_ogre_1_1_g_l_e_s2_f_b_o_multi_render_target.html#a97b2d63554ec8e515789ac65c6200a33",
"class_ogre_1_1_g_l_e_s2_gpu_program_manager.html#ac8f7ee61606730572a8590060d8896a0",
"class_ogre_1_1_g_l_e_s2_old_vertex_array_object.html#aceb346ebf2076fac29e23a6cd81af1ae",
"class_ogre_1_1_g_l_e_s2_render_system.html#a50d1b5b4571302c60a827c9a906f8b2c",
"class_ogre_1_1_g_l_e_s2_render_system.html#ad2f3dfdf32a348811bba87265f99384d",
"class_ogre_1_1_g_l_e_s2_render_texture.html#ae78e25805a045b8834c831d452ab6e07",
"class_ogre_1_1_g_l_e_s2_texture_manager.html#a2be53eb46d25acabf47d1da453f1a183",
"class_ogre_1_1_g_l_e_s2_vao_manager.html#ace2545e4ce03ff536e3d505e4669cc91",
"class_ogre_1_1_g_l_s_l_e_s_shader_factory.html#a595ea4c05da8aa987d3800e65d23355d",
"class_ogre_1_1_g_l_s_l_shader.html#a09aed7a5acfd1841b7d6648e56acd0ce",
"class_ogre_1_1_g_l_s_l_shader.html#aef4abc028e1309b9998666a126019a5e",
"class_ogre_1_1_g_l_s_l_shader_manager.html#af1a871ac005af0be0b8c1857a4f8eea9",
"class_ogre_1_1_g_l_x_window.html#af798d769a45e89e13330cf3d07aaa6c7",
"class_ogre_1_1_g_t_k_window.html#ae68eb2ce228a55811c058de85e369a29",
"class_ogre_1_1_gpu_program_manager.html#a6ce966e769770ce9f90d77eddc2c30a3",
"class_ogre_1_1_gpu_program_parameters.html#a45f9ad9a685d751d0466e5f616b3c7ad",
"class_ogre_1_1_gpu_shared_parameters_usage.html#a8357fe4fb4849772b94baa4bf47c7ded",
"class_ogre_1_1_high_level_gpu_program.html#a8eb34a9034aab62fd537c021a79e3366",
"class_ogre_1_1_hlms_buffer_manager.html#a9a1b12239e46b90448d960ed784148d8",
"class_ogre_1_1_hlms_disk_cache.html#a1c727e879a260c37b00ce5505fe8e144",
"class_ogre_1_1_hlms_manager.html#a4d68ea5c2f604722aa2cf8246ee4122c",
"class_ogre_1_1_hlms_pbs_datablock.html#ad80b40dd9799f18a585e53732c4ff30a",
"class_ogre_1_1_hlms_unlit.html#a3d1d7be7920b0be05094939b708ca849",
"class_ogre_1_1_hollow_ellipsoid_emitter.html#a006cd1c3c866b13a1750615a8ab9615b",
"class_ogre_1_1_hollow_ellipsoid_emitter_1_1_cmd_inner_z.html#aea3316dbdd0e023ac03153f705c3f276",
"class_ogre_1_1_ifd_probe_visualizer.html#a8096988a16728c8b7e32495146111c62",
"class_ogre_1_1_image2.html#a827ee9c1c386ef259a9871c92573de40",
"class_ogre_1_1_indirect_buffer_packed.html#a542b46fc7a7cf5fe524cfc7b4b389ba9",
"class_ogre_1_1_internal_cubemap_probe.html#adce32528577d71b228692df906ecd17c",
"class_ogre_1_1_irradiance_field.html#a8bd7c938df6c80dd07dacb592a41313d",
"class_ogre_1_1_item.html#ac4305df204604a027ca27ef77efff295",
"class_ogre_1_1_light.html#a2eb94fea5944cf0d33702a75cfa14a74",
"class_ogre_1_1_light.html#aee4828c2dee7731058f0b9cd047cf78d",
"class_ogre_1_1_lod0_stripifier.html#a94f191280507c1253370ddca21113c87",
"class_ogre_1_1_lod_outside_marker.html#a9ed12c63e911c6a05d376f5ddf9abc29",
"class_ogre_1_1_lw_string.html#a93f445a0294d2e72629629a6e1c4351d",
"class_ogre_1_1_manual_object.html#acbfc4840224e8b6ed6e27849d3341675",
"class_ogre_1_1_map_iterator.html#a22c1c22fab97253a922a190d2ace205e",
"class_ogre_1_1_material_manager.html#adce32528577d71b228692df906ecd17c",
"class_ogre_1_1_mathlib_c.html#acd167580daf5c5faa1f0f9b1c3c48972",
"class_ogre_1_1_mesh.html#a8a78f8b8a9e4d96ec3b1182f9dcc3b97",
"class_ogre_1_1_metal_async_texture_ticket.html#a4e4a25bb4d7cf6f3c5ab091432c3cbe8a8f850db29927b5a749d4b4d3a2771035",
"class_ogre_1_1_metal_depth_buffer.html#a5b113673ee58204611c3435ee59b7225",
"class_ogre_1_1_metal_depth_texture.html#a8f541900f7e1f73f4c313a732199029a",
"class_ogre_1_1_metal_depth_texture_target.html#aff6dff38c24adfff6e10732952a9a57c",
"class_ogre_1_1_metal_gpu_program_manager.html#abbb523a827bc6ea90d3b5ec80f0cf770",
"class_ogre_1_1_metal_multi_render_target.html#aed1464ac3de21ff20db8f9f1f8608dc7",
"class_ogre_1_1_metal_null_texture.html#aedac1d8544a08c37220de86d92a0018b",
"class_ogre_1_1_metal_program.html#a09aed7a5acfd1841b7d6648e56acd0ce",
"class_ogre_1_1_metal_program_1_1_cmd_preprocessor_defines.html#a2cdcb1746492f86901b9b8bd62480575",
"class_ogre_1_1_metal_render_system.html#a24b8f8b077f9b677567dfc6184c171bd",
"class_ogre_1_1_metal_render_system.html#aba600f21b87a9f259f435645b5e8e686",
"class_ogre_1_1_metal_render_texture.html#aa1d5570996e2e5ccf219257ec48d8d7f",
"class_ogre_1_1_metal_tex_buffer_packed.html#a8357fe4fb4849772b94baa4bf47c7ded",
"class_ogre_1_1_metal_texture.html#ae272c029efa4b04406a58e01cd8ea7e8",
"class_ogre_1_1_metal_texture_gpu.html#aecb090fe794e34a11a11b9aecc1bdc88",
"class_ogre_1_1_metal_texture_gpu_render_target.html#a85f9670da9031ec138caf8b3e910b37e",
"class_ogre_1_1_metal_texture_gpu_window.html#a88170d5ed9c9d2dc6e886217aaf1f6a5",
"class_ogre_1_1_metal_texture_manager.html#ae63b06c1fd6d1266b4c5dacc35e521b4",
"class_ogre_1_1_metal_vao_manager.html#af7c18af1342b5ae1a15d55838b667935",
"class_ogre_1_1_movable_object.html#ab86b755f38ec01b52ed6a512d9d31ef9",
"class_ogre_1_1_movable_plane.html#aa5d44b14d6f032f3e0a26e83589180bca44420e1c49338ae721f298826e164935",
"class_ogre_1_1_n_u_l_l_async_texture_ticket.html#afe11bd546cf7315f4526488e7078cc7d",
"class_ogre_1_1_n_u_l_l_read_only_buffer_packed.html#a566014653e1b98b5ed24166f9e11bacd",
"class_ogre_1_1_n_u_l_l_render_system.html#a780e5c6941c2f5d1f699dbf3e8c5b869",
"class_ogre_1_1_n_u_l_l_render_texture.html#a15f59cd1b4a2b2e65fcee349d78ae490a6df94556ae07dfa0384808dca8dedb64",
"class_ogre_1_1_n_u_l_l_render_window.html#a8c6e69aaf7c38c3a81d0f9e0e4d433c7",
"class_ogre_1_1_n_u_l_l_tex_buffer_packed.html#a542b46fc7a7cf5fe524cfc7b4b389ba9",
"class_ogre_1_1_n_u_l_l_texture.html#ad08a57b7d9b9ae9134b633c47cb4b59c",
"class_ogre_1_1_n_u_l_l_texture_gpu_render_target.html#a096a1aa3086614e8e1782159378ebbea",
"class_ogre_1_1_n_u_l_l_texture_manager.html#ae26b6ecd722f3e24b52de8b4ac9bba0d",
"class_ogre_1_1_n_u_l_l_window.html#a22779bbfb123c76e922942ba876e330a",
"class_ogre_1_1_na_cl_window.html#a629ce6c74ec3b4b565ce5b85a98e0482",
"class_ogre_1_1_node.html#aa26ad04301cff9834e9cbec7e4f8cada",
"class_ogre_1_1_null_entity.html#a7d491859c987cf03cd2b62121e9bfea0",
"class_ogre_1_1_obj_cmd_buffer.html",
"class_ogre_1_1_octree_axis_aligned_box_scene_query.html#ac9f17a2607f960bc1ce451522994960c",
"class_ogre_1_1_octree_camera.html#a5c3e1f6a763318587937678a237eb9d3",
"class_ogre_1_1_octree_camera.html#ac4305df204604a027ca27ef77efff295",
"class_ogre_1_1_octree_node.html#a26ad52b5bfbb9ef2ba53e0a2ea05172a",
"class_ogre_1_1_octree_plane_bounded_volume_list_scene_query.html#a0a75b5ed976da2f9023382f4c4514b3aa018493b6c87271e0c8ba014f058cffd3",
"class_ogre_1_1_octree_scene_manager.html#a210282d4f484267c0da27bcce2fe4570",
"class_ogre_1_1_octree_scene_manager.html#a7b4cbdad7664b8747f1929dbec29c046",
"class_ogre_1_1_octree_scene_manager.html#adadb06373ea8f59dc573bfd1d8e03713",
"class_ogre_1_1_octree_zone.html#a8ff931ac282027f2d1d786b128a92a94",
"class_ogre_1_1_p_c_plane.html#aa5d44b14d6f032f3e0a26e83589180bcaaf227c36d02442779fd4600d00580f5e",
"class_ogre_1_1_p_c_z_camera.html#a4569b91ce5341ab892f74ab4555cac7d",
"class_ogre_1_1_p_c_z_camera.html#aa99c8d61f9368c4701fda183c9cc23fd",
"class_ogre_1_1_p_c_z_frustum.html#ad16ed839fe1810504c262e45b4e81ec0abd7c5a5255321386e7068e5da5f1e497",
"class_ogre_1_1_p_c_z_light.html#a7241fd29a548973d1d2fa56bcc9f13a4",
"class_ogre_1_1_p_c_z_plane_bounded_volume_list_scene_query.html#a0a75b5ed976da2f9023382f4c4514b3aa667bbec7031e58ab244f9efc32056f38",
"class_ogre_1_1_p_c_z_scene_manager.html#a17bf05431cd6901c4b2fc9c89a42de67",
"class_ogre_1_1_p_c_z_scene_manager.html#a70ac27e437a9785222c2b2c0be865e05",
"class_ogre_1_1_p_c_z_scene_manager.html#abd76eb23cf6c7eadd9447ba07975e0ee",
"class_ogre_1_1_p_c_z_scene_node.html#a2c91f1000535fd11c872b93d43917dc5",
"class_ogre_1_1_p_c_z_scene_node.html#af75a04b0835a4db48ef4ff59c4659149",
"class_ogre_1_1_p_c_zone_factory_manager.html#a467b7946ab23580257f243c91f9304a9",
"class_ogre_1_1_page_content_factory.html#a93e6a86dde5483c053ca0f2a85bbfd6c",
"class_ogre_1_1_parallax_corrected_cubemap.html#a1ca86c0e7deea599f2fd35ba264af857",
"class_ogre_1_1_parallax_corrected_cubemap_base.html#a150467bdcc98979f2284947300b8af50",
"class_ogre_1_1_particle_emitter.html#a8d8c2e2e39187abc715d911cfa802780",
"class_ogre_1_1_particle_system.html#ad66149b7a6f5ba1cd5c58fbd69f0446a",
"class_ogre_1_1_pass.html#a4407e5004bef75a9b940d868d092ff1c",
"class_ogre_1_1_pixel_count_lod_strategy_base.html#a280ee76e313e85dbd47d46fcf38ce1fd",
"class_ogre_1_1_plane_bounded_volume_list_scene_query.html#ab422c67a2c8844f410fe822a357cba3b",
"class_ogre_1_1_point_emitter.html#ab477389178da76c28a12e07d1191bef4",
"class_ogre_1_1_portal.html#a771d99cc1f7b16d289a9d023d8a60aa7",
"class_ogre_1_1_portal_base.html#a5cf356caed0ca1812cf442df2a27302d",
"class_ogre_1_1_portal_factory.html#a8357fe4fb4849772b94baa4bf47c7ded",
"class_ogre_1_1_property_set.html#a63fc6bdc2eb6aeac24898a77ec5e2023",
"class_ogre_1_1_quaternion.html#a15c912e62c9abcb3335de205cdf30c2d",
"class_ogre_1_1_r_t_shader_1_1_const_parameter.html#a91fc3614f191bebf0461676a03750312ac887733af706c0769dcbb9215f7e8b50",
"class_ogre_1_1_r_t_shader_1_1_f_f_p_render_state_builder.html",
"class_ogre_1_1_r_t_shader_1_1_h_l_s_l_program_processor.html#a595ea4c05da8aa987d3800e65d23355d",
"class_ogre_1_1_r_t_shader_1_1_layered_blending.html#a93b4bd28f1d89d80bcfd9f1aca5a8ffa",
"class_ogre_1_1_r_t_shader_1_1_parameter.html#a4fa6286f097d19e92a8ed91645fbfbe7a6c62d8aaf6fd0fd1db4d177d1e09ab26",
"class_ogre_1_1_r_t_shader_1_1_program_set.html#a1c727e879a260c37b00ce5505fe8e144",
"class_ogre_1_1_r_t_shader_1_1_sub_render_state.html#a33a6bfe77d6b958bd044fd81a7f50fc4",
"class_ogre_1_1_r_t_shader_1_1_uniform_parameter.html#a4fa6286f097d19e92a8ed91645fbfbe7a6b442c1ac1cd7f888aaa9fe0e27d153d",
"class_ogre_1_1_ray_scene_query.html#acb46d4b0a597156d9ba5abc39d127792",
"class_ogre_1_1_rectangle2_d.html#a583dad5b16665689ced7226f21b74b73",
"class_ogre_1_1_region_scene_query.html#a0a75b5ed976da2f9023382f4c4514b3aa667bbec7031e58ab244f9efc32056f38",
"class_ogre_1_1_render_system.html#a80b7ab32b8f82cf340c47d55f6e69881",
"class_ogre_1_1_render_system_capabilities_serializer.html#afa55498caf0ebc5a63c21856e0ced63a",
"class_ogre_1_1_render_window.html#ab757d8a24dead55af8e773a036ee141d",
"class_ogre_1_1_renderable_animated.html#abc10ce7cf20904a17baf3934914dbf92",
"class_ogre_1_1_resource_group_manager.html#ad1f1a983f9e2dfddee802c47bb0b1ca9",
"class_ogre_1_1_ring_emitter.html#aa4cc84bb842666d1a69d25375dac5d12",
"class_ogre_1_1_rotation_affector.html#a1bea65fa2b3c2ac5a9f3be59b46a80e8",
"class_ogre_1_1_s_d_l_window.html#a24b847657d58db6ab5e14f7972e38a5d",
"class_ogre_1_1_scale_affector.html#a8357fe4fb4849772b94baa4bf47c7ded",
"class_ogre_1_1_scene_manager.html#a237a09e65919b808473c543fb886723f",
"class_ogre_1_1_scene_manager.html#a8aca5477f30dd55321a101f25c6a5ee2",
"class_ogre_1_1_scene_manager.html#af5348867645ff727d1ca25dd89795376",
"class_ogre_1_1_scene_node.html#a6f5fc23a04991fc7a524763b0bdf829c",
"class_ogre_1_1_screen_ratio_pixel_count_lod_strategy.html#a93e6a86dde5483c053ca0f2a85bbfd6c",
"class_ogre_1_1_shadow_texture_definition.html#a1c82ba62c6bd28831012501ece8a226d",
"class_ogre_1_1_simple_page_content_collection.html#a1c727e879a260c37b00ce5505fe8e144",
"class_ogre_1_1_skeleton_track.html#a06859e96ad7f4ee291ca41b60f7e507f",
"class_ogre_1_1_small_vector_3_01_t_00_010_01_4.html#acde38b560a786b47c3a89f4b8d820d9c",
"class_ogre_1_1_small_vector_template_base_3_01_t_00_01true_01_4.html#a60eb6558693ab2020fba03c8ea5038c5",
"class_ogre_1_1_stack_vector.html#a934e2168a86c78f87e5c408444a19e85",
"class_ogre_1_1_string_converter.html#a2b0bf2b7d279c782d175797ecccdb769",
"class_ogre_1_1_sub_mesh.html#acc12dd4a452669f7376210e86c578638",
"class_ogre_1_1_technique.html#af6cff3e7cbf0b677433ca0a0da04c6aa",
"class_ogre_1_1_terrain.html#afd3641ddf000f3e2ca771408f558131b",
"class_ogre_1_1_terrain_lod_manager.html#a8357fe4fb4849772b94baa4bf47c7ded",
"class_ogre_1_1_terrain_paging.html",
"class_ogre_1_1_texture.html#a8775d611ddf70bc0ee89a9d62bac69cf",
"class_ogre_1_1_texture_filter_1_1_generate_sw_mipmaps.html#a8357fe4fb4849772b94baa4bf47c7ded",
"class_ogre_1_1_texture_gpu_manager.html#a3886c70b1674b192547c407edeb4c67e",
"class_ogre_1_1_texture_unit_state.html#a595ea4c05da8aa987d3800e65d23355d",
"class_ogre_1_1_uav_buffer_packed.html#a481ad7b97cb88501c5777f4703ff2320",
"class_ogre_1_1_user_object_bindings.html#a6f14cf16371d9cbb2194ed31dfa96207",
"class_ogre_1_1_vct_image_voxelizer.html#a57e0523432c6e5133ff4fc251111a60e",
"class_ogre_1_1_vct_voxelizer_source_base.html#a81d9aa7659e492c2e3c9fd08dca322c9a77aa9415bc2c0d2bae69c7eed3b758f1",
"class_ogre_1_1_vector_iterator.html#adc1cbc2e629b20b8a959646eddb720c5",
"class_ogre_1_1_volume_1_1_c_s_g_intersection_source.html#ab286fe8a82819d12dd8e416ca9ff30c5",
"class_ogre_1_1_volume_1_1_chunk.html#a1d2036c97809818174f0fae0b128bde5",
"class_ogre_1_1_volume_1_1_mesh_builder.html#a21ee4b8440710f4e4015c1396347e674",
"class_ogre_1_1_voxel_visualizer.html#a19bf2951b97744064509c13068143f3d",
"class_ogre_1_1_voxel_visualizer.html#aee4828c2dee7731058f0b9cd047cf78d",
"class_ogre_1_1_vulkan_async_texture_ticket.html#a595ea4c05da8aa987d3800e65d23355d",
"class_ogre_1_1_vulkan_const_buffer_packed.html#adce32528577d71b228692df906ecd17c",
"class_ogre_1_1_vulkan_dynamic_buffer.html#af1266978fe2a746af99b88ffb2e90598",
"class_ogre_1_1_vulkan_plugin.html#a8357fe4fb4849772b94baa4bf47c7ded",
"class_ogre_1_1_vulkan_program.html#ad12bddb95c7311f31f602cb70b8350c5",
"class_ogre_1_1_vulkan_read_only_buffer_packed.html#aceb93f9fe49eedbdbc91ea6eb5feed56",
"class_ogre_1_1_vulkan_render_system.html#a717e68a43a58586c8657eeab9a7e70f0",
"class_ogre_1_1_vulkan_render_system.html#aee564a6854261706cdef290d1719830a",
"class_ogre_1_1_vulkan_tex_buffer_packed.html#a0c6fb3d387685e50e2b5069164b95e6b",
"class_ogre_1_1_vulkan_texture_gpu_manager.html#a3a83a74e7ba3a7d6c09fedc55085035a",
"class_ogre_1_1_vulkan_texture_gpu_window.html#a1f960e2ffea97ad43308c23ce1efb4b1",
"class_ogre_1_1_vulkan_uav_buffer_packed.html#a155f9b4ef9bc20239691a869d4daa08d",
"class_ogre_1_1_vulkan_vao_manager.html#adfdffa2493cff3b6e355ebb9504020f3",
"class_ogre_1_1_vulkan_window.html#a63fc6bdc2eb6aeac24898a77ec5e2023",
"class_ogre_1_1_vulkan_window_swap_chain_based.html#a6acbc757e5f5b091aa51022e4cb382a4",
"class_ogre_1_1_vulkan_xcb_window.html#ab12be5918fc0d0c3a827250bf4f4d281",
"class_ogre_1_1_win32_e_g_l_window.html#a24b847657d58db6ab5e14f7972e38a5d",
"class_ogre_1_1_win32_g_l_support.html",
"class_ogre_1_1_wire_aabb.html#a0c7563dc12f2d0032121403cb4c6f5c2",
"class_ogre_1_1_wire_aabb.html#add737d6564593333aeac457a1a2c0269",
"class_ogre_1_1_x11_e_g_l_support.html#aefd41d9e95a03ae26bfe9a633c45852f",
"class_ogre_1_1_x11_e_g_l_window.html#ad4e95b76827cb41d936ccb4a8c308c6e",
"class_ogre_1_1v1_1_1_animation.html#a3f776e70ac07a50648d183f808fd54dd",
"class_ogre_1_1v1_1_1_billboard_chain.html#a1c727e879a260c37b00ce5505fe8e144",
"class_ogre_1_1v1_1_1_billboard_particle_renderer_1_1_cmd_common_direction.html",
"class_ogre_1_1v1_1_1_border_panel_overlay_element.html#a01a6e571941916969316ab23c5ee4739",
"class_ogre_1_1v1_1_1_border_renderable.html#a4136ce4b9d3add5203339327015d872d",
"class_ogre_1_1v1_1_1_d3_d11_hardware_buffer.html#ae1e1ae8b6ec0a783e89e7c83e6aee49d",
"class_ogre_1_1v1_1_1_d3_d11_hardware_index_buffer.html#adce32528577d71b228692df906ecd17c",
"class_ogre_1_1v1_1_1_d3_d11_hardware_vertex_buffer.html#a75a2626bd4e32142cfbab9a3e27a3884",
"class_ogre_1_1v1_1_1_default_hardware_buffer_manager_base.html#a43a2a3d014f873b4284b229173d1514e",
"class_ogre_1_1v1_1_1_entity.html#a0705793aa522c46065de36240e91b75c",
"class_ogre_1_1v1_1_1_entity.html#acbf1ced1a50c2410a69e0e00c7427a2b",
"class_ogre_1_1v1_1_1_g_l3_plus_default_hardware_buffer_manager_base.html#aed1464ac3de21ff20db8f9f1f8608dc7",
"class_ogre_1_1v1_1_1_g_l3_plus_default_hardware_uniform_buffer.html#ac0c56e93ce6f29bf39fb48c3d5dc64cf",
"class_ogre_1_1v1_1_1_g_l3_plus_hardware_buffer_manager_base.html#a73af0e384fffafd30ec13438507d31ebaefbef8f3135135145a860b8647faba4c",
"class_ogre_1_1v1_1_1_g_l3_plus_hardware_pixel_buffer.html#a1c727e879a260c37b00ce5505fe8e144",
"class_ogre_1_1v1_1_1_g_l3_plus_hardware_uniform_buffer.html#aa8ae9778b4cec2ae635e2d29ff252197",
"class_ogre_1_1v1_1_1_g_l3_plus_render_to_vertex_buffer.html#a6ad500eb266e02e3fa726ca49b1ac87d",
"class_ogre_1_1v1_1_1_g_l_e_s2_default_hardware_buffer_manager_base.html#a5b732d773d680492f36f23c5d217bade",
"class_ogre_1_1v1_1_1_g_l_e_s2_default_hardware_vertex_buffer.html#a1a1a5e9fd1743fdd09d2b1cfa740bcd4",
"class_ogre_1_1v1_1_1_g_l_e_s2_hardware_index_buffer.html#a2b345b7f5a6fbb4b8fed8ab3327c4ebb",
"class_ogre_1_1v1_1_1_g_l_e_s2_render_buffer.html#a3e7adba95ce26023bc068e8103c5b20a",
"class_ogre_1_1v1_1_1_g_l_e_s2_texture_buffer.html#ae7a9245fba8062c2b72ec7073f830ceb",
"class_ogre_1_1v1_1_1_hardware_index_buffer_shared_ptr.html#a722d443fdfd8b3ea12b22bcf07a7977d",
"class_ogre_1_1v1_1_1_manual_object.html#a0dd28799bb7e7e0d8a3d7cdf918ab137",
"class_ogre_1_1v1_1_1_manual_object.html#af005f44e46aca8dd1c1a4331325cff50",
"class_ogre_1_1v1_1_1_mesh.html#a290b658e4bb4c656242f4381994871d0",
"class_ogre_1_1v1_1_1_mesh_serializer.html#adce32528577d71b228692df906ecd17c",
"class_ogre_1_1v1_1_1_metal_hardware_buffer_manager.html#adce32528577d71b228692df906ecd17c",
"class_ogre_1_1v1_1_1_metal_hardware_pixel_buffer.html#a87632db14ce9c10e113f1966c6a97c6dab5fe6ef729ea615265721a10ff7d9e57",
"class_ogre_1_1v1_1_1_metal_null_pixel_buffer.html#ae1e1ae8b6ec0a783e89e7c83e6aee49d",
"class_ogre_1_1v1_1_1_node_animation_track.html#a2c8cab60e986d090bd2e4aa9fe103829",
"class_ogre_1_1v1_1_1_old_node.html#a595ea4c05da8aa987d3800e65d23355d",
"class_ogre_1_1v1_1_1_old_skeleton_instance.html#a3c49142f739ba8fb56d6e7b3db235fb7",
"class_ogre_1_1v1_1_1_overlay.html#a54fc365f16014359d23cecf859da5510",
"class_ogre_1_1v1_1_1_overlay_element.html#a067f276ea17b17b4fac00005f16cb4c0",
"class_ogre_1_1v1_1_1_overlay_manager.html#ad75795bd8a121a5ff2ef61aedefdb675",
"class_ogre_1_1v1_1_1_patch_mesh.html#a1aa750a4b994f2b1066220936cdfdb94ae5f2eca654bd810da4c774570a5b4b77",
"class_ogre_1_1v1_1_1_rectangle2_d.html#a173800458c92ecefcff9d037be54afea",
"class_ogre_1_1v1_1_1_rectangle2_d.html#aed1464ac3de21ff20db8f9f1f8608dc7",
"class_ogre_1_1v1_1_1_ribbon_trail.html#ac2904cb122ab8c8d5066abefb29dfa96",
"class_ogre_1_1v1_1_1_simple_renderable.html#a9a62a4a12787812f012691af0c3493f1",
"class_ogre_1_1v1_1_1_skeleton_serializer.html#a8357fe4fb4849772b94baa4bf47c7ded",
"class_ogre_1_1v1_1_1_static_geometry_1_1_geometry_bucket.html#afcbf4cb36d5911a9d40a40c57e94f23b",
"class_ogre_1_1v1_1_1_static_geometry_1_1_region.html#a98fe88f82f86eafa19308074495db809",
"class_ogre_1_1v1_1_1_sub_entity.html#ad22289842e973a7a6b727c8cd32e9be9",
"class_ogre_1_1v1_1_1_text_area_overlay_element.html#a1c727e879a260c37b00ce5505fe8e144",
"class_ogre_1_1v1_1_1_vertex_buffer_binding.html#a595ea4c05da8aa987d3800e65d23355d",
"class_ogre_1_1v1_1_1_vulkan_hardware_buffer_manager.html#a73af0e384fffafd30ec13438507d31eba2b12eec76abb4c56344b6c6ff1cdb65f",
"class_ogre_1_1v1_1_1_vulkan_hardware_vertex_buffer.html#a3532eedb965a3231d89b0635ce7aa21d",
"class_ogre_1_1v1_1_1_wire_bounding_box.html#a862e7d3af40ee31de2f95a626207f96d",
"dir_3ae3e761bf77602e3076fcfbcef7a68c.html",
"functions_vars_g.html",
"group___general.html#gae6612ea0b05ddf514b5478a6c0c0cb09",
"group___general.html#ggaeac3f87f851f50e636b4058b7122f14ca277d9b89ed32e6152846df2bb549e7be",
"group___general.html#ggaeac3f87f851f50e636b4058b7122f14cac640ab2c6efc2840f466fae4089a124d",
"group___image.html#gga71f09fe41a1db41186262f1aa5814a18a5974980eff0d4ea04d6f015eb672aff3",
"group___image.html#gga7e0353e7d36d4c2e8468641b7303d39caf989cdb2a57a8ae4f0e9618e2fc411b1",
"group___optional.html#ga2762e5a38c2a8f887236920efb6dc840",
"group___r_t_shader.html#gaf51bcbc1062b97a10c74ea7e70dec651",
"group___resources.html#gga7b904fc5463a8ef1e61f6de39b603fc4a30cabc71be6eab8d761e73fe005ee2c6",
"namespace_ogre.html#a027109503a988ba85f4c63b55082907fa0d7cffdff4ceb5440142ca43f0fedc29",
"namespace_ogre.html#a769d41c00dac951b9c2162c6c1a73573a380ecbe21c2c7d7f7fb3846ab8011598",
"namespace_ogre_1_1_gpu_page_out_strategy.html#a4d2162c156be30917f38f15e2327ce65",
"namespace_ogre_1_1v1.html#ada7f44b0e95a262656a6b5b715c05377a2447a30a81e24b1673b1c711d30df707",
"struct_ogre_1_1_build_light_list_request.html#a832c4b7ada0ed9b63e0555062633e59a",
"struct_ogre_1_1_compositor_pass_uav_def_1_1_texture_source.html",
"struct_ogre_1_1_descriptor_set_texture2_1_1_buffer_slot.html#a44c443a87425b88acbf8bf03cc37893a",
"struct_ogre_1_1_g_l3_plus_vertex_array_object.html#a63fc6bdc2eb6aeac24898a77ec5e2023",
"struct_ogre_1_1_gpu_program_parameters_1_1_auto_constant_definition.html#afd666b79a5ca388640daf451d7da8c07",
"struct_ogre_1_1_hlms_pass_pso.html#af263ff6f0b338cd6c9e1bfa968a7214bae6f3010b1e71eccd877cad332ef9fc0f",
"struct_ogre_1_1_lod_config.html#a9634e8bfa3c423b7a2ad130f5db9ca61",
"struct_ogre_1_1_lod_work_queue_request.html#a9f6f9198f8a9057cbb148139deb43f5d",
"struct_ogre_1_1_object_data.html#a54aba887e19ad0a9a7191423b9469ba2",
"struct_ogre_1_1_pixel_format_description.html#aa90de37a46dda9f0b0bbf0dcad7860fa",
"struct_ogre_1_1_render_window_description.html",
"struct_ogre_1_1_staging_buffer_1_1_destination.html#a070ad6f0ea4a9d15d07ca77de015e4b3",
"struct_ogre_1_1_texture_box.html#aa03bb44178bbe534762593ef6748b8d8",
"struct_ogre_1_1_unlit_property.html#a73de3cefced44648b0e1af2df2ba82ec",
"struct_ogre_1_1_vector_set.html#a69fe902553d7da5e96a8b74df3714e22",
"struct_ogre_1_1_volume_1_1_chunk_parameters.html#a111c9e9333e7ae3497fc818190a03fd8",
"struct_ogre_1_1_vulkan_device.html#ad297c3cb0e91a9bcbe4a1232901dad94",
"struct_ogre_1_1float4x3.html#a018aa2c1c2c7698a35459796c3188c27",
"struct_ogre_1_1v1_1_1_static_geometry_1_1_queued_sub_mesh.html#a1c727e879a260c37b00ce5505fe8e144"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';