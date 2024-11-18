import sqlite3
import pandas as pd
import matplotlib.pyplot as plt
import io
import base64
from collections import Counter
from datetime import datetime

def connect_db():
    db = sqlite3.connect('database.db')
    db.row_factory = sqlite3.Row
    return db

def get_warranty_claims_ia():
    try:
        db = connect_db()
        cursor = db.cursor()

        query = """
        SELECT 
            wc.id,
            cp.partModel, 
            cp.partBrand, 
            cp.partNumber, 
            cp.lotNumber, 
            rs.name, 
            rs.taxNumber, 
            rs.email, 
            rs.phone, 
            rs.warrantyDeadline,
            rs.created_at
        FROM 
            warrantysClaims wc
        INNER JOIN 
            carPart cp ON wc.partNumber = cp.partNumber
        INNER JOIN 
            registerSale rs ON wc.partNumber = rs.partNumber
        ORDER BY wc.id DESC
        """
        cursor.execute(query)
        results = cursor.fetchall()

        db.close()

        if not results:
            return []

        response = [
            {
                "id": int(row["id"]),
                "partModel": row["partModel"],
                "partBrand": row["partBrand"],
                "partNumber": row["partNumber"],
                "lotNumber": row["lotNumber"],
                "name": row["name"],
                "taxNumber": row["taxNumber"],
                "email": row["email"],
                "phone": row["phone"],
                "warrantyDeadline": row["warrantyDeadline"],
                "created_at": row["created_at"],
            }
            for row in results
        ]
        return response

    except Exception as e:
        print(f"Erro ao acessar o banco de dados: {e}")
        return []

def get_part_register_list_ia():
    try:
        db = connect_db()
        cursor = db.cursor()

        query = """
        SELECT 
            cp.partModel, 
            cp.partBrand, 
            cp.partNumber, 
            cp.lotNumber, 
            rs.name, 
            rs.taxNumber, 
            rs.email, 
            rs.phone, 
            rs.warrantyDeadline,
            rs.created_at
        FROM 
            carPart cp
        INNER JOIN 
            registerSale rs ON cp.partNumber = rs.partNumber
        ORDER BY cp.id DESC
        """
        cursor.execute(query)
        results = cursor.fetchall()
        db.close()

        if not results:
            return []

        response = [
            {
                "partModel": row["partModel"],
                "partBrand": row["partBrand"],
                "partNumber": row["partNumber"],
                "lotNumber": row["lotNumber"],
                "name": row["name"],
                "taxNumber": row["taxNumber"],
                "email": row["email"],
                "phone": row["phone"],
                "warrantyDeadline": row["warrantyDeadline"],
                "created_at": row["created_at"],
            }
            for row in results
        ]
        return response

    except Exception as e:
        print(f"Erro ao acessar o banco de dados: {e}")
        return []

def gerar_grafico_marcas(warranty_claims):
    marcas = [claim["partBrand"] for claim in warranty_claims]
    contagem_marcas = Counter(marcas)

    top_marcas = contagem_marcas.most_common(5)

    marcas_top = [marca[0] for marca in top_marcas]
    contagens_top = [marca[1] for marca in top_marcas]

    cores = ['red' if i == 0 else 'skyblue' for i in range(len(marcas_top))]

    fig, ax = plt.subplots(figsize=(10, 6))
    ax.bar(marcas_top, contagens_top, color=cores)

    ax.set_yticks(range(0, max(contagens_top) + 1, 1))  # Intervalo do eixo Y
    ax.set_title('Top 5 Marcas Mais Acionadas para Garantia', fontsize=16)
    ax.set_xlabel('Marca', fontsize=12)
    ax.set_ylabel('Quantidade de Retornos', fontsize=12)

    img_buffer = io.BytesIO()
    plt.savefig(img_buffer, format='png', dpi=100)
    img_buffer.seek(0)

    img_base64 = base64.b64encode(img_buffer.getvalue()).decode('utf8')

    plt.close(fig)  
    return img_base64

def gerar_grafico_retornos_mensais(warranty_claims):
    now = datetime.now()
    mes_atual = now.month
    ano_atual = now.year

    retornos_mes_atual = []
    for claim in warranty_claims:
        if "created_at" in claim and claim["created_at"]:
            try:
                data_str = claim["created_at"]
                data = datetime.strptime(data_str, "%Y-%m-%d %H:%M:%S")

                if data.month == mes_atual and data.year == ano_atual:
                    retornos_mes_atual.append(claim)
            except ValueError:
                print(f"Data inválida ignorada: {claim['created_at']}")

    marcas = [claim["partBrand"] for claim in retornos_mes_atual]
    contagem_marcas = Counter(marcas)

    top_marcas = contagem_marcas.most_common(5)

    marcas_top = [marca[0] for marca in top_marcas]
    contagens_top = [marca[1] for marca in top_marcas]

    cores = ['red' if i == 0 else 'skyblue' for i in range(len(marcas_top))]

    fig, ax = plt.subplots(figsize=(10, 6))
    ax.bar(marcas_top, contagens_top, color=cores)

    ax.set_yticks(range(0, max(contagens_top) + 1, 1))
    ax.set_title('Top 5 Retornos de Garantia no Mês Atual', fontsize=16)
    ax.set_xlabel('Marca', fontsize=12)
    ax.set_ylabel('Quantidade de Retornos', fontsize=12)

    img_buffer = io.BytesIO()
    plt.savefig(img_buffer, format='png', dpi=100)
    img_buffer.seek(0)

    img_base64 = base64.b64encode(img_buffer.getvalue()).decode('utf8')

    plt.close(fig)
    return img_base64


def gerar_grafico_pecas(part_register_list):
    pecas = [claim["partModel"] for claim in part_register_list]
    contagem_pecas = Counter(pecas)

    top_pecas = contagem_pecas.most_common(3)

    pecas_top = [peca[0] for peca in top_pecas]
    contagens_top = [peca[1] for peca in top_pecas]

    cores = ['red' if i == 0 else 'skyblue' for i in range(len(pecas_top))]

    fig, ax = plt.subplots(figsize=(10, 6))
    ax.bar(pecas_top, contagens_top, color=cores)

    ax.set_yticks(range(0, max(contagens_top) + 1, 1))
    ax.set_title('Top 3 Peças Mais Acionadas para Garantia', fontsize=16)
    ax.set_xlabel('Peças', fontsize=12)
    ax.set_ylabel('Quantidade de Retornos', fontsize=12)

    img_buffer = io.BytesIO()
    plt.savefig(img_buffer, format='png', dpi=100)
    img_buffer.seek(0)

    img_base64 = base64.b64encode(img_buffer.getvalue()).decode('utf8')

    plt.close(fig)
    return img_base64

def gerar_grafico_retornos_mensais_pecas(part_register_list):
    now = datetime.now()
    mes_atual = now.month
    ano_atual = now.year

    retornos_mes_atual = []
    for claim in part_register_list:
        if "created_at" in claim and claim["created_at"]:
            try:
                data_str = claim["created_at"]

                data = datetime.strptime(data_str, "%Y-%m-%d %H:%M:%S")
                
                if data.month == mes_atual and data.year == ano_atual:
                    retornos_mes_atual.append(claim)
            except ValueError:
                print(f"Data inválida ignorada: {claim['created_at']}")

    pecas = [claim["partModel"] for claim in retornos_mes_atual]
    contagem_pecas = Counter(pecas)

    top_pecas = contagem_pecas.most_common(3)

    pecas_top = [peca[0] for peca in top_pecas]
    contagens_top = [peca[1] for peca in top_pecas]

    cores = ['red' if i == 0 else 'skyblue' for i in range(len(pecas_top))]

    fig, ax = plt.subplots(figsize=(10, 6))
    ax.bar(pecas_top, contagens_top, color=cores)

    ax.set_yticks(range(0, max(contagens_top) + 1, 1))
    ax.set_title('Top 3 Retornos de Garantia no Mês Atual', fontsize=16)
    ax.set_xlabel('Peças', fontsize=12)
    ax.set_ylabel('Quantidade de Retornos', fontsize=12)

    img_buffer = io.BytesIO()
    plt.savefig(img_buffer, format='png', dpi=100)
    img_buffer.seek(0)

    img_base64 = base64.b64encode(img_buffer.getvalue()).decode('utf8')

    plt.close(fig)
    return img_base64


def fitness_function(objetivo_retorno_min=50, objetivo_retorno_max=100):
    warranty_claims = get_warranty_claims_ia()

    if not warranty_claims:
        return None

    df = pd.DataFrame(warranty_claims)

    df["warrantyDeadline"] = pd.to_datetime(df["warrantyDeadline"], errors="coerce")

    df = df.dropna(subset=["warrantyDeadline"])

    df["Mes"] = df["warrantyDeadline"].dt.to_period("M")
    resultados = df.groupby(["partBrand", "Mes"])["id"].count().unstack(fill_value=0)

    if resultados.empty:
        return None

    relatorio = []

    for marca in resultados.index:
        for mes in resultados.columns:
            quantidade_retorno = resultados.loc[marca, mes]

            if objetivo_retorno_min <= quantidade_retorno <= objetivo_retorno_max:
                status = "Dentro do intervalo ideal"
                pontuacao = f"Pontuação +1 (Retorno de garantia {quantidade_retorno} dentro do intervalo {objetivo_retorno_min} a {objetivo_retorno_max})"
            else:
                status = "Fora do intervalo ideal"
                pontuacao = f"Pontuação -1 (Retorno de garantia {quantidade_retorno} fora do intervalo {objetivo_retorno_min} a {objetivo_retorno_max})"

            relatorio.append({
                "Marca": marca,
                "Mês": str(mes),
                "Quantidade de Retornos": int(quantidade_retorno),  # Convertendo para int
                "Status": status,
                "Pontuação": pontuacao
            })

    fitness_total = sum(1 if "Dentro do intervalo ideal" in item["Status"] else -1 for item in relatorio)

    return fitness_total, relatorio
