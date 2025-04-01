"use client"

import { useEffect, useState } from "react"
import { supabase } from "../supabaseCLient"
import "./ProdutosAdmin.css"
import Header from "../components/Header"

const ADMIN_EMAIL = process.env.REACT_APP_ADMIN_EMAIL

export default function AdminPage() {
  const [user, setUser] = useState(null)
  const [isAdmin, setIsAdmin] = useState(false)
  const [product, setProduct] = useState({ name: "", description: "", price: "" })
  const [image, setImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")

  useEffect(() => {
    async function fetchUser() {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser()
      if (error) {
        console.error("Erro ao obter usuário:", error)
        return
      }
      setUser(user)
      setIsAdmin(user?.email === ADMIN_EMAIL)
    }
    fetchUser()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setProduct({ ...product, [name]: value })
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImage(file)

      // Create image preview
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!image) {
      alert("Por favor, selecione uma imagem.")
      return
    }
    setIsLoading(true)
    setSuccessMessage("")
    try {
      const fileName = `${Date.now()}-${image.name}`
      const { error } = await supabase.storage.from("products-img").upload(fileName, image)

      if (error) {
        console.error("Erro ao fazer upload da imagem:", error)
        alert("Erro ao fazer upload da imagem.")
        return
      }

      const imageUrl = `${supabase.storage.from("products-img").getPublicUrl(fileName).data.publicUrl}`
      const { error: insertError } = await supabase
        .from("products")
        .insert([{ name: product.name, description: product.description, price: product.price, image_url: imageUrl }])

      if (insertError) {
        console.error("Erro ao adicionar produto:", insertError)
        alert("Erro ao adicionar produto.")
      } else {
        setSuccessMessage("Produto adicionado com sucesso!")
        setProduct({ name: "", description: "", price: "" })
        setImage(null)
        setImagePreview(null)
      }
    } catch (error) {
      console.error("Erro:", error)
      alert("Ocorreu um erro ao processar sua solicitação.")
    } finally {
      setIsLoading(false)
    }
  }

  if (!user) return <p className="loading-message">Carregando...</p>
  if (!isAdmin) return <p className="error-message">Acesso negado. Você não tem permissão para acessar esta página.</p>

  return (
    <div className="admin-page">
      <div className="admin-header">
        <Header />
        <h2 className="admin-title">Painel de Administração</h2>
        <p className="admin-subtitle">Adicione novos produtos à loja</p>
        <div className="divider"></div>
      </div>

      <form className="admin-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="name">
            Nome do Produto
          </label>
          <input
            id="name"
            className="form-input"
            type="text"
            name="name"
            placeholder="Ex: Brigadeiro Gourmet"
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="description">
            Descrição
          </label>
          <textarea
            id="description"
            className="form-textarea"
            name="description"
            placeholder="Descreva o produto em detalhes..."
            value={product.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="price">
            Preço (R$)
          </label>
          <input
            id="price"
            className="form-input"
            type="number"
            name="price"
            placeholder="0.00"
            step="0.01"
            min="0"
            value={product.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="file-input-container">
          <label className="file-input-label" htmlFor="image">
            Imagem do Produto
          </label>
          <input id="image" className="file-input" type="file" accept="image/*" onChange={handleImageChange} required />
        </div>

        {imagePreview && (
          <div className="image-preview">
            <p className="preview-title">Pré-visualização:</p>
            <img src={imagePreview || "/placeholder.svg"} alt="Pré-visualização" className="preview-image" />
          </div>
        )}

        <button className="submit-button" type="submit" disabled={isLoading}>
          {isLoading ? "Processando..." : "Adicionar Produto"}
        </button>

        {successMessage && <div className="success-message">{successMessage}</div>}
      </form>
    </div>
  )
}

