import * as _AssetsProxy1 from "./_Assets";
import * as _ColorProxy1 from "./_Color";
import * as arraysProxy1 from "./arrays/_Float32Array";
import * as arraysProxy2 from "./arrays/_Uint32Array";
import * as audio1Proxy1 from "./audio1";
import * as audio2Proxy1 from "./audio2";
import * as audio2Proxy2 from "./audio2/ogg/tools";
import * as audio2Proxy3 from "./audio2/ogg/vorbis";
import * as audio2Proxy4 from "./audio2/ogg/vorbis/_VorbisDecodeState";
import * as audio2Proxy5 from "./audio2/ogg/vorbis/data";
import * as graphics1Proxy1 from "./graphics1";
import * as graphics2Proxy1 from "./graphics2";
import * as graphics2Proxy2 from "./graphics2/truetype";
import * as graphics4Proxy1 from "./graphics4";
import * as inputProxy1 from "./input";
import * as internalProxy1 from "./internal";
import * as jsProxy1 from "./js";
import * as jsProxy2 from "./js/graphics4";
import * as jsProxy3 from "./js/vr";
import * as mathProxy1 from "./math";
import * as networkProxy1 from "./network";
import * as simdProxy1 from "./simd";
import * as vrProxy1 from "./vr";

export { default as AlignedQuad } from "./AlignedQuad";
export { default as Assets } from "./Assets";
export { default as Canvas } from "./Canvas";
export { default as CanvasImage } from "./CanvasImage";
export { default as CompilerDefines } from "./CompilerDefines";
export { default as FrameTask } from "./FrameTask";
export { default as Framebuffer } from "./Framebuffer";
export { default as GamepadStates } from "./GamepadStates";
export { default as Image } from "./Image";
export { default as Kravur } from "./Kravur";
export { default as KravurImage } from "./KravurImage";
export { default as LoaderImpl } from "./LoaderImpl";
export { default as Position } from "./Position";
export { default as RendererOptions } from "./RendererOptions";
export { default as Resource } from "./Resource";
export { default as Scaler } from "./Scaler";
export { default as Scheduler } from "./Scheduler";
export { default as ScreenRotation } from "./ScreenRotation";
export { default as Shaders } from "./Shaders";
export { default as Sound } from "./Sound";
export { default as System } from "./System";
export { default as SystemImpl } from "./SystemImpl";
export { default as TargetDisplay } from "./TargetDisplay";
export { default as TargetRectangle } from "./TargetRectangle";
export { default as TimeTask } from "./TimeTask";
export { default as Video } from "./Video";
export { default as WebGLImage } from "./WebGLImage";
export { default as WindowMode } from "./WindowMode";
export { default as WindowOptions } from "./WindowOptions";
export { default as WindowedModeOptions } from "./WindowedModeOptions";

export namespace _Assets {
    export type BlobList = _AssetsProxy1.BlobList;
    export type FontList = _AssetsProxy1.FontList;
    export type ImageList = _AssetsProxy1.ImageList;
    export type SoundList = _AssetsProxy1.SoundList;
    export type VideoList = _AssetsProxy1.VideoList;
}

export namespace _Color {
    export type Color_Impl_ = _ColorProxy1.Color_Impl_;
}

export namespace arrays {
    export namespace _Float32Array {
        export namespace _Float32Array {
            export type Float32Array_Impl_ = arraysProxy1.Float32Array_Impl_;
        }
    }

    export namespace _Uint32Array {
        export namespace _Uint32Array {
            export type Uint32Array_Impl_ = arraysProxy2.Uint32Array_Impl_;
        }
    }
}

export namespace audio1 {
    export type AudioChannel = audio1Proxy1.AudioChannel;
}

export namespace audio2 {
    export type Audio = audio2Proxy1.Audio;
    export type Audio1 = audio2Proxy1.Audio1;
    export type AudioChannel = audio2Proxy1.AudioChannel;
    export type Buffer = audio2Proxy1.Buffer;
    export type StreamChannel = audio2Proxy1.StreamChannel;

    export namespace ogg {
        export namespace tools {
            export namespace tools {
                export type Crc32 = audio2Proxy2.Crc32;
                export type MathTools = audio2Proxy2.MathTools;
                export type Mdct = audio2Proxy2.Mdct;
            }
        }

        export namespace vorbis {
            export namespace vorbis {
                export type Reader = audio2Proxy3.Reader;
                export type VorbisDecodeState = audio2Proxy3.VorbisDecodeState;
                export type VorbisDecoder = audio2Proxy3.VorbisDecoder;
                export type VorbisTools = audio2Proxy3.VorbisTools;
            }

            export namespace _VorbisDecodeState {
                export namespace _VorbisDecodeState {
                    export type FindPageResult = audio2Proxy4.FindPageResult;
                }
            }

            export namespace data {
                export namespace data {
                    export type Codebook = audio2Proxy5.Codebook;
                    export type Comment = audio2Proxy5.Comment;
                    export type Floor = audio2Proxy5.Floor;
                    export type Floor0 = audio2Proxy5.Floor0;
                    export type Floor1 = audio2Proxy5.Floor1;
                    export type Header = audio2Proxy5.Header;
                    export type IntPoint = audio2Proxy5.IntPoint;
                    export type Mapping = audio2Proxy5.Mapping;
                    export type MappingChannel = audio2Proxy5.MappingChannel;
                    export type Mode = audio2Proxy5.Mode;
                    export type Page = audio2Proxy5.Page;
                    export type PageFlag = audio2Proxy5.PageFlag;
                    export type ProbedPage = audio2Proxy5.ProbedPage;
                    export type ReaderError = audio2Proxy5.ReaderError;
                    export type ReaderErrorType = audio2Proxy5.ReaderErrorType;
                    export type Residue = audio2Proxy5.Residue;
                    export type Setting = audio2Proxy5.Setting;
                }
            }
        }
    }
}

export namespace graphics1 {
    export type Graphics = graphics1Proxy1.Graphics;
}

export namespace graphics2 {
    export type Graphics = graphics2Proxy1.Graphics;
    export type Graphics1 = graphics2Proxy1.Graphics1;
    export type ImageScaleQuality = graphics2Proxy1.ImageScaleQuality;

    export namespace truetype {
        export namespace truetype {
            export type StbTruetype = graphics2Proxy2.StbTruetype;
            export type Stbtt__active_edge = graphics2Proxy2.Stbtt__active_edge;
            export type Stbtt__bitmap = graphics2Proxy2.Stbtt__bitmap;
            export type Stbtt__edge = graphics2Proxy2.Stbtt__edge;
            export type Stbtt__point = graphics2Proxy2.Stbtt__point;
            export type Stbtt_aligned_quad = graphics2Proxy2.Stbtt_aligned_quad;
            export type Stbtt_bakedchar = graphics2Proxy2.Stbtt_bakedchar;
            export type Stbtt_fontinfo = graphics2Proxy2.Stbtt_fontinfo;
            export type Stbtt_pack_context = graphics2Proxy2.Stbtt_pack_context;
            export type Stbtt_pack_range = graphics2Proxy2.Stbtt_pack_range;
            export type Stbtt_packedchar = graphics2Proxy2.Stbtt_packedchar;
            export type Stbtt_temp_font_v_metrics = graphics2Proxy2.Stbtt_temp_font_v_metrics;
            export type Stbtt_temp_glyph_h_metrics = graphics2Proxy2.Stbtt_temp_glyph_h_metrics;
            export type Stbtt_temp_rect = graphics2Proxy2.Stbtt_temp_rect;
            export type Stbtt_temp_region = graphics2Proxy2.Stbtt_temp_region;
            export type Stbtt_vertex = graphics2Proxy2.Stbtt_vertex;
            export type VectorOfIntPointer = graphics2Proxy2.VectorOfIntPointer;
        }
    }
}

export namespace graphics4 {
    export type BlendingFactor = graphics4Proxy1.BlendingFactor;
    export type BlendingOperation = graphics4Proxy1.BlendingOperation;
    export type ColoredShaderPainter = graphics4Proxy1.ColoredShaderPainter;
    export type CompareMode = graphics4Proxy1.CompareMode;
    export type ConstantLocation = graphics4Proxy1.ConstantLocation;
    export type CubeMap = graphics4Proxy1.CubeMap;
    export type CullMode = graphics4Proxy1.CullMode;
    export type FragmentShader = graphics4Proxy1.FragmentShader;
    export type GeometryShader = graphics4Proxy1.GeometryShader;
    export type Graphics = graphics4Proxy1.Graphics;
    export type Graphics2 = graphics4Proxy1.Graphics2;
    export type ImageShaderPainter = graphics4Proxy1.ImageShaderPainter;
    export type IndexBuffer = graphics4Proxy1.IndexBuffer;
    export type MipMapFilter = graphics4Proxy1.MipMapFilter;
    export type PipelineState = graphics4Proxy1.PipelineState;
    export type PipelineStateBase = graphics4Proxy1.PipelineStateBase;
    export type StencilAction = graphics4Proxy1.StencilAction;
    export type TessellationControlShader = graphics4Proxy1.TessellationControlShader;
    export type TessellationEvaluationShader = graphics4Proxy1.TessellationEvaluationShader;
    export type TextShaderPainter = graphics4Proxy1.TextShaderPainter;
    export type TextureAddressing = graphics4Proxy1.TextureAddressing;
    export type TextureFilter = graphics4Proxy1.TextureFilter;
    export type TextureFormat = graphics4Proxy1.TextureFormat;
    export type TextureUnit = graphics4Proxy1.TextureUnit;
    export type Usage = graphics4Proxy1.Usage;
    export type VertexBuffer = graphics4Proxy1.VertexBuffer;
    export type VertexData = graphics4Proxy1.VertexData;
    export type VertexElement = graphics4Proxy1.VertexElement;
    export type VertexShader = graphics4Proxy1.VertexShader;
    export type VertexStructure = graphics4Proxy1.VertexStructure;
}

export namespace input {
    export type Gamepad = inputProxy1.Gamepad;
    export type Keyboard = inputProxy1.Keyboard;
    export type Mouse = inputProxy1.Mouse;
    export type MouseImpl = inputProxy1.MouseImpl;
    export type Pen = inputProxy1.Pen;
    export type Surface = inputProxy1.Surface;
}

export namespace internal {
    export type BytesBlob = internalProxy1.BytesBlob;
    export type HdrFormat = internalProxy1.HdrFormat;
}

export namespace js {
    export type AEAudioChannel = jsProxy1.AEAudioChannel;
    export type AudioElementAudio = jsProxy1.AudioElementAudio;
    export type CanvasGraphics = jsProxy1.CanvasGraphics;
    export type Font = jsProxy1.Font;
    export type MobileWebAudio = jsProxy1.MobileWebAudio;
    export type MobileWebAudioChannel = jsProxy1.MobileWebAudioChannel;
    export type MobileWebAudioSound = jsProxy1.MobileWebAudioSound;
    export type Sound = jsProxy1.Sound;
    export type Video = jsProxy1.Video;
    export type WebAudioSound = jsProxy1.WebAudioSound;

    export namespace graphics4 {
        export namespace graphics4 {
            export type ConstantLocation = jsProxy2.ConstantLocation;
            export type Graphics = jsProxy2.Graphics;
            export type Graphics2 = jsProxy2.Graphics2;
            export type TextureUnit = jsProxy2.TextureUnit;
        }
    }

    export namespace vr {
        export namespace vr {
            export type VrInterface = jsProxy3.VrInterface;
        }
    }
}

export namespace math {
    export type FastMatrix3 = mathProxy1.FastMatrix3;
    export type FastMatrix4 = mathProxy1.FastMatrix4;
    export type FastVector2 = mathProxy1.FastVector2;
    export type FastVector3 = mathProxy1.FastVector3;
    export type FastVector4 = mathProxy1.FastVector4;
    export type Matrix3 = mathProxy1.Matrix3;
    export type Matrix4 = mathProxy1.Matrix4;
    export type Quaternion = mathProxy1.Quaternion;
    export type Vector2 = mathProxy1.Vector2;
    export type Vector3 = mathProxy1.Vector3;
    export type Vector4 = mathProxy1.Vector4;
}

export namespace network {
    export type Client = networkProxy1.Client;
    export type Controller = networkProxy1.Controller;
    export type ControllerBuilder = networkProxy1.ControllerBuilder;
    export type Entity = networkProxy1.Entity;
    export type LocalClient = networkProxy1.LocalClient;
    export type Network = networkProxy1.Network;
    export type Session = networkProxy1.Session;
    export type State = networkProxy1.State;
    export type SyncBuilder = networkProxy1.SyncBuilder;
}

export namespace simd {
    export type Float32x4 = simdProxy1.Float32x4;
}

export namespace vr {
    export type Pose = vrProxy1.Pose;
    export type PoseState = vrProxy1.PoseState;
    export type SensorState = vrProxy1.SensorState;
    export type TimeWarpImage = vrProxy1.TimeWarpImage;
    export type TimeWarpParms = vrProxy1.TimeWarpParms;
    export type VrInterface = vrProxy1.VrInterface;
}
