import wx
import PBO

# buat instance App
app = wx.App()

# buat instance Frame/Window
frame = PBO.MyFrame2(parent=None)
# tampilkan frame/window ke layar
frame.Show()

# jalankan aplikasi
app.MainLoop()
